import React, { useEffect, useState } from "react";
import { BaseHighcharts, useInput } from "../../components";

const axios = require("axios");

const API = "http://ws.audioscrobbler.com/2.0/";
const API_KEY = "97cee60fe2193b383cd8377301901a80";

const LastfmPage = () => {
  const [tracks, setTracks] = useState([]);
  const [artist, setArtist] = useState([]);

  const [country, setCountry] = useInput({ type: "text" });
  const [topnumber, setTopnumber] = useInput({ type: "number" });

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(
        `${API}?method=geo.gettoptracks&country=${country}&api_key=${API_KEY}&format=json&limit=${topnumber}`
      )
      .then((response) => {
        // handle success
        if (response.data.tracks !== undefined) {
          const track_res = response.data.tracks.track.map((track) => {
            return {
              name: track.name,
              y: Number(track.listeners),
            };
          });
          setTracks(track_res);
        } else {
          setTracks([]);
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })

    axios
      .get(
        `${API}?method=geo.gettopartists&country=${country}&api_key=${API_KEY}&format=json&limit=${topnumber}`
      )
      .then((response) => {
        // handle success
        if (response.data.topartists !== undefined) {
          const artist_res = response.data.topartists.artist.map((artist) => {
            return {
              name: artist.name,
              y: Number(artist.listeners),
            };
          });

          setArtist(artist_res);
        } else {
          setArtist([]);
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }, [country, topnumber]);

  return (
    <div>
      <form>
        <label>
          Country Name:
          {setCountry}
        </label>
        <label>
          Top Number:
          {setTopnumber}
        </label>
      </form>
      {tracks.length !== 0 ? (
        <BaseHighcharts
          data={{
            data: tracks,
            chart: "column",
            title: `Top ${topnumber} Tracks in ${country.toUpperCase()}`,
            name: "Tracks",
            xAxisType: "category",
            yAxisTitle: "Total percent market share",
          }}
        />
      ) : (
        <h1>Bilgi Bulunamadı</h1>
      )}

      {artist.length !== 0 ? (
        <BaseHighcharts
          data={{
            data: artist,
            chart: "column",
            title: `Top ${topnumber} Artist in ${country.toUpperCase()}`,
            name: "Artist",
            xAxisType: "category",
            yAxisTitle: "Total percent market share",
          }}
        />
      ) : (
        <h1>Bilgi Bulunamadı</h1>
      )}
    </div>
  );
};

export default LastfmPage;

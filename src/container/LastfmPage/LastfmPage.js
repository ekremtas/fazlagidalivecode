import React, { useEffect, useState } from "react";
import BaseHighcharts from "../../components/BaseHighcharts/BaseHighcharts";

const axios = require("axios");

const API = "http://ws.audioscrobbler.com/2.0/";
const API_KEY = "97cee60fe2193b383cd8377301901a80";

const LastfmPage = () => {
  const [tracks, setTracks] = useState([]);
  const [artist, setArtist] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(
        `${API}?method=geo.gettoptracks&country=${country}&api_key=${API_KEY}&format=json&limit=10`
      )
      .then(function (response) {
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
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    axios
      .get(
        `${API}?method=geo.gettopartists&country=${country}&api_key=${API_KEY}&format=json&limit=10`
      )
      .then(function (response) {
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
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [country]);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" value={country} onChange={handleChange} />
        </label>
      </form>
      {tracks.length !== 0 ? (
        <BaseHighcharts data={tracks} text={"Top 20"} />
      ) : (
        <h1>Bilgi Bulunamadı</h1>
      )}

      {artist.length !== 0 ? (
        <BaseHighcharts data={artist} text={"Top 20"} />
      ) : (
        <h1>Bilgi Bulunamadı</h1>
      )}
    </div>
  );
};

export default LastfmPage;

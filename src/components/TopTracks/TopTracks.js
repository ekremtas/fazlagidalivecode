import React, { useState, useEffect } from "react";
import BaseHighcharts from "../BaseHighcharts/BaseHighcharts";

const axios = require("axios");

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=97cee60fe2193b383cd8377301901a80&format=json&limit=10`
      )
      .then(function (response) {
        // handle success

        if (response.data.tracks !== undefined) {
          const exam = response.data.tracks.track.map((track) => {
            return {
              name: track.name,
              y: Number(track.listeners),
            };
          });

          setTracks(exam);
        } else {
          setTracks([]);
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
        <BaseHighcharts tracks={tracks} text={"Top 20"} />
      ) : (
        <h1>Bilgi Bulunamadı</h1>
      )}
    </div>
  );
};

export default TopTracks;

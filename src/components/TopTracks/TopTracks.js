import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Top 20",
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Total percent market share",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>',
    },

    series: [
      {
        name: "Tracks",
        colorByPoint: true,
        data: tracks,
      },
    ],
  };

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
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <h1>Bilgi Bulunamadı</h1>
      )}
    </div>
  );
};

export default TopTracks;

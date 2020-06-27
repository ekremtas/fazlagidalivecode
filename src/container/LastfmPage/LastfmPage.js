import React, { useEffect, useState } from "react";
import { BaseHighcharts, useInput, LastfmForm } from "../../components";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { pageLoading } from "../../redux/actions";

const axios = require("axios");

const API = "https://ws.audioscrobbler.com/2.0/";
const API_KEY = "97cee60fe2193b383cd8377301901a80";

const LastfmPage = (props) => {
  const [tracks, setTracks] = useState({});
  const [artists, setArtist] = useState({});

  const [submitform, setSubmitform] = useState(1);

  const [country, setCountry] = useInput({
    type: "text",
    firstvalue: "TURKEY",
  });
  const [topnumber, setTopnumber] = useInput({
    type: "number",
    firstvalue: 10,
  });

  useEffect(() => {
    // Make a request for a user with a given ID
    if (submitform === 1) {
      setSubmitform(0);
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
            setTracks({
              data: track_res,
              title: `Top ${topnumber} Tracks in ${country.toUpperCase()}`,
            });
          } else {
            setTracks({});
          }
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });

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

            setArtist({
              data: artist_res,
              title: `Top ${topnumber} Artist in ${country.toUpperCase()}`,
            });
          } else {
            setArtist({});
          }
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
  }, [country, submitform, topnumber]);

  return (
    <Container>
      <h1>{props.loading}</h1>
      <LastfmForm
        inputs={{
          countryInput: setCountry,
          topnumberInput: setTopnumber,
          setSubmitform: setSubmitform,
          submitform: submitform,
        }}
      />
      {tracks.data !== undefined ? (
        <BaseHighcharts
          data={{
            data: tracks.data,
            chart: "column",
            title: tracks.title,
            name: "Tracks",
            xAxisType: "category",
            yAxisTitle: "Total percent market share",
          }}
        />
      ) : (
        <h1>Bilgi Bulunamadı</h1>
      )}

      {artists.data !== undefined ? (
        <BaseHighcharts
          data={{
            data: artists.data,
            chart: "column",
            title: artists.title,
            name: "Artist",
            xAxisType: "category",
            yAxisTitle: "Total percent market share",
          }}
        />
      ) : (
        <h1>Bilgi Bulunamadı</h1>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { loading } = state.chartsReducer;
  return{
    loading
  }
};

const mapDispatchToProps = {
  pageLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(LastfmPage);

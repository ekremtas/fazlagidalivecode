import React, { useEffect, useState } from "react";
import { BaseHighcharts, useInput, LastfmForm } from "../../components";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { pageLoading, getTracks } from "../../redux/actions";

const axios = require("axios");

const API = "https://ws.audioscrobbler.com/2.0/";
const API_KEY = "97cee60fe2193b383cd8377301901a80";

const LastfmPage = (props) => {
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
      props.getTracks(country, topnumber);

      setSubmitform(0);
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
  }, [country, props, submitform, topnumber]);

  return (
    <Container>
      <LastfmForm
        inputs={{
          countryInput: setCountry,
          topnumberInput: setTopnumber,
          setSubmitform: setSubmitform,
          submitform: submitform,
        }}
      />
      {props.tracks.length !== 0 ? (
        <BaseHighcharts
        data={{
          data: props.tracks,
          chart: "column",
          title: props.tracktitle,
          name: "Tracks",
          xAxisType: "category",
          yAxisTitle: "Total percent market share",
        }}
      />
      ) : (
        <h1>{props.tracktitle}</h1>
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
  const { loading, tracks , tracktitle } = state.chartsReducer;
  return {
    loading,
    tracks,
    tracktitle
  };
};

const mapDispatchToProps = {
  pageLoading,
  getTracks
};

export default connect(mapStateToProps, mapDispatchToProps)(LastfmPage);

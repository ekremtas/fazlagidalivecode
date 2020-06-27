import React, { useEffect, useState } from "react";
import {
  useInput,
  LastfmForm,
  TopTracks,
  TopArtist,
} from "../../components";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { pageLoading, getTracks , getArtists} from "../../redux/actions";

const LastfmPage = (props) => {
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
      props.getArtists(country, topnumber);
      setSubmitform(0);     
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

      <TopTracks />

      <TopArtist />

    </Container>
  );
};

const mapStateToProps = (state) => {
  const { loading } = state.chartsReducer;
  return {
    loading,
  };
};

const mapDispatchToProps = {
  pageLoading,
  getTracks,
  getArtists
};

export default connect(mapStateToProps, mapDispatchToProps)(LastfmPage);

import React, { useEffect } from "react";
import { LastfmForm, TopTracks, TopArtist } from "../../components";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getTracks, getArtists } from "../../redux/actions";

const LastfmPage = (props) => {
  useEffect(() => {
    // Make a request for a user with a given ID
    props.getTracks(props.highchartform.country, props.highchartform.topnumber);
    props.getArtists(
      props.highchartform.country,
      props.highchartform.topnumber
    );
  }, [props]);

  return (
    <Container>
      <LastfmForm />
      <hr/>

      <TopTracks />
      <hr/>

      <TopArtist />
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { highchartform } = state.chartsReducer;
  return {
    highchartform,
  };
};

const mapDispatchToProps = {
  getTracks,
  getArtists,
};

export default connect(mapStateToProps, mapDispatchToProps)(LastfmPage);

import React, { useEffect } from "react";
import { LastfmForm, TopTracks, TopArtist } from "../../components";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { pageLoading, getTracks, getArtists } from "../../redux/actions";

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
      <TopTracks />
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
  pageLoading,
  getTracks,
  getArtists,
};

export default connect(mapStateToProps, mapDispatchToProps)(LastfmPage);

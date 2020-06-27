import React from "react";
import { BaseHighcharts } from "../../components";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";

const TopTracks = (props) => {
  return (
    <>
      {props.loading.ArtistsPage ? (
        <Spinner animation="border" role="status" />
      ) : props.tracks.length !== 0 ? (
        <BaseHighcharts
          data={{
            data: props.tracks,
            chart: "column",
            title: props.title.track,
            name: "Tracks",
            xAxisType: "category",
            yAxisTitle: "Total percent market share",
          }}
        />
      ) : (
        <h1>{props.title.track}</h1>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, tracks, title } = state.chartsReducer;
  return {
    loading,
    tracks,
    title,
  };
};

export default connect(mapStateToProps, null)(TopTracks);

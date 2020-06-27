import React from "react";
import { BaseHighcharts } from "../../components";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";
const TopArtist = (props) => {
  return (
    <>
      {props.loading.ArtistsPage ? (
        <Spinner animation="border" role="status"/>
      ) : props.artists.length !== 0 ? (
        <BaseHighcharts
          data={{
            data: props.artists,
            chart: "column",
            title: props.title.artist,
            name: "Artist",
            xAxisType: "category",
            yAxisTitle: "Total percent market share",
          }}
        />
      ) : (
        <h1>{props.title.artist}</h1>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, artists, title } = state.chartsReducer;
  return {
    loading,
    artists,
    title,
  };
};

export default connect(mapStateToProps, null)(TopArtist);

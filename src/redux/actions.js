const axios = require("axios");

const API = "https://ws.audioscrobbler.com/2.0/";
const API_KEY = "97cee60fe2193b383cd8377301901a80";

export const PAGE_LOADING = "PAGE_LOADING";
export const ARTISTS_LOADING = "ARTISTS_LOADING";
export const TRACKS_LOADING = "TRACKS_LOADING";
export const GET_TRACKS = "GET_TRACKS";
export const GET_ARTISTS = "GET_ARTISTS";
export const SET_ART_TRA_FORM = "SET_ART_TRA_FORM";

export const pageLoading = () => {
  return (dispatch) => {
    dispatch({
      type: PAGE_LOADING,
    });
  };
};

export const getTracks = (country, topnumber) => {
  return (dispatch) => {
    dispatch({
      type: TRACKS_LOADING,
    });
    axios
      .get(
        `${API}?method=geo.gettoptracks&country=${country}&api_key=${API_KEY}&format=json&limit=${topnumber}`
      )
      .then((result) => {
        if (result.data.tracks !== undefined) {
          dispatch({
            type: GET_TRACKS,
            payload: {
              data: result.data.tracks.track,
              title: `Top ${topnumber} Tracks in ${country.toUpperCase()}`,
            },
          });
        } else {
          dispatch({
            type: GET_TRACKS,
            payload: {
              data: [],
              title: `No track for country of "${country.toUpperCase()}"`,
            },
          });
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
};

export const getArtists = (country, topnumber) => {
  return (dispatch) => {
    dispatch({
      type: ARTISTS_LOADING,
    });
    axios
      .get(
        `${API}?method=geo.gettopartists&country=${country}&api_key=${API_KEY}&format=json&limit=${topnumber}`
      )
      .then((result) => {
        if (result.data.topartists !== undefined) {
          dispatch({
            type: GET_ARTISTS,
            payload: {
              data: result.data.topartists.artist,
              title: `Top ${topnumber} Artist in ${country.toUpperCase()}`,
            },
          });
        } else {
          dispatch({
            type: GET_ARTISTS,
            payload: {
              data: [],
              title: `No artist for country of "${country.toUpperCase()}"`,
            },
          });
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
};

export const setArtTraForm = (inputs) => {
  return (dispatch) => {
    dispatch({
      type: SET_ART_TRA_FORM,
      payload: inputs,
    });
  };
};

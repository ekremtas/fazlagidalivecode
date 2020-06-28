import * as Actions from "./types";

const initialState = {
  loading: {},
  tracks: [],
  title: {},
  artists: [],
  highchartform: { country: "turkey", topnumber: 10 },
};

export const chartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.PAGE_LOADING:
      return { ...state, loading: { ...state.loading, LastfmPage: true } };
    case Actions.ARTISTS_LOADING:
      return { ...state, loading: { ...state.loading, ArtistsPage: true } };
    case Actions.TRACKS_LOADING:
      return { ...state, loading: { ...state.loading, TracksPage: true } };
    case Actions.GET_TRACKS:
      return {
        ...state,
        tracks: action.payload.data.map((track) => {
          return {
            name: track.name,
            y: Number(track.listeners),
          };
        }),
        title: { ...state.title, track: action.payload.title },
        loading: { ...state.loading, TracksPage: false },
      };
    case Actions.GET_ARTISTS:
      return {
        ...state,
        artists: action.payload.data.map((artist) => {
          return {
            name: artist.name,
            y: Number(artist.listeners),
          };
        }),
        title: { ...state.title, artist: action.payload.title },
        loading: { ...state.loading, ArtistsPage: false },
      };
    case Actions.SET_ART_TRA_FORM:
      return {
        ...state,
        highchartform: {
          ...state.highchartform,
          country: action.payload.country,
          topnumber: Number(action.payload.topnumber),
        },
      };
    default:
      return state;
  }
};

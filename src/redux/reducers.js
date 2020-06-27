import * as Actions from "./actions";

const initialState = {
  loading: { LastfmPage: false },
  tracks: [],
  title: {},
  artists: [],
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
    default:
      return state;
  }
};

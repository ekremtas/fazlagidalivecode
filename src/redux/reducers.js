import * as Actions from "./actions";

const initialState = {
  loading: false,
  tracks: [],
  title: ""
};

export const chartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.PAGE_LOADING:
      return { ...state, loading: true };
    case Actions.GET_TRACKS:
      return {
        ...state,
        tracks: action.payload.data.map((track) => {
          return {
            name: track.name,
            y: Number(track.listeners),
          };
        }),
        tracktitle: action.payload.title,
        loading: false,
      };
    default:
      return state;
  }
};

import * as Actions from "./actions";

const initialState = {
  loading: 0,
};

export const chartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.PAGE_LOADING:
      return { ...state, loading: 1 };
    default:
      return state;
  }
};

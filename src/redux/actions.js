export const PAGE_LOADING = "GET_TRACKS";


export const pageLoading = () => {
  return (dispatch) => {
    dispatch({
      type: PAGE_LOADING,
    });
  };
};

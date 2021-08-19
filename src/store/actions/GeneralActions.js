import * as actionTypes from "./types";


// ---------------- LOADING ------------------------------

export const setLoading = (value) => {
  return {
    type: actionTypes.LOADING,
    payload: value,
  };
};
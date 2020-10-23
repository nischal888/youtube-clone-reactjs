import ActionTypes from "../constants";

export const fetchStart = () => {
  return {
    type: ActionTypes.FETCH_START,
  };
};
export const fetchEnd = () => {
  return {
    type: ActionTypes.FETCH_END,
  };
};

export const errorOccured = (payload) => {
  return {
    type: ActionTypes.ERROR_OCCURED,
    payload,
  };
};
export const resetError = () => {
  return {
    type: ActionTypes.RESET_ERROR,
  };
};
export const hideModal = () => {
  return {
    type: ActionTypes.HIDE_MODAL,
  };
};

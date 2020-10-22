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

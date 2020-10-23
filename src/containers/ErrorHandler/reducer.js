import GlobalActionTypes from "../../constants";

const initialState = {
  errorStatus: false,
  errorData: null,
};

const ErrorHandleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalActionTypes.ERROR_OCCURED:
      const { error } = action.payload;
      return {
        ...state,
        errorStatus: true,
        errorData: error.message,
      };
    case GlobalActionTypes.RESET_ERROR:
      return {
        ...state,
        errorStatus: false,
        errorData: null,
      };
    case GlobalActionTypes.HIDE_MODAL:
      return {
        ...state,
        errorStatus: false,
      };
    default:
      return state;
  }
};

export default ErrorHandleReducer;

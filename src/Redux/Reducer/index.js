import * as types from "../Type/Types";

const initialState = {
  loading: false,
  users: [],
  error: null
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case types.GET_USERS_SUCCESS: {
      return {
        ...state,
        loading: action.payload.loading,
        users: action.payload.users
      };
    }
    case types.GET_USERS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
};
export default users;
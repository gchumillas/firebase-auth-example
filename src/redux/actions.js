export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCES = "GET_USERS_SUCCES";

export const GET_SINGLE_USER_REQUEST = "GET_SINGLE_USER_REQUEST";
export const GET_SINGLE_USER_SUCCESS = "GET_SINGLE_USER_SUCCESS";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";

export const ACTION_FAIL = "ACTION_FAIL";

export const getUsers = ({ page, rowsPerPage }) => {
  return {
    type: GET_USERS_REQUEST,
    payload: { page, rowsPerPage }
  };
};

export const getUsersSuccess = payload => {
  return {
    type: GET_USERS_SUCCES,
    payload
  };
};

export const getSingleUser = ({ userId }) => {
  return {
    type: GET_SINGLE_USER_REQUEST,
    payload: { userId }
  };
};

export const getSingleUserSuccess = payload => {
  return {
    type: GET_SINGLE_USER_SUCCESS,
    payload
  };
};

export const updateUser = ({ userId, firstName, lastName }) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: { userId, firstName, lastName }
  };
};

export const updateUserSuccess = payload => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload
  };
};

export const createUser = ({ userId, firstName, lastName }) => {
  return {
    type: CREATE_USER_REQUEST,
    payload: { userId, firstName, lastName }
  };
};

export const createUserSuccess = payload => {
  return {
    type: CREATE_USER_SUCCESS,
    payload
  };
};

export const actionFail = errorMessage => {
  return {
    type: ACTION_FAIL,
    payload: { errorMessage }
  };
};

import { takeLatest, call, put } from "redux-saga/effects";

import {
  GET_USERS_REQUEST,
  GET_SINGLE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  CREATE_USER_REQUEST
} from "redux/actions";
import {
  actionFail,
  getUsersSuccess,
  getSingleUserSuccess,
  updateUserSuccess,
  createUserSuccess
} from "redux/actions";
import {
  getUsers as getUsersRequest,
  getSingleUser as getSingleUserRequest,
  updateUser as updateUserRequest,
  createUser as createUserRequest
} from "redux/providers";

export function* getUsers(action) {
  const { page, rowsPerPage } = action.payload;

  try {
    const res = yield call(getUsersRequest, page, rowsPerPage);
    yield put(getUsersSuccess(res.data));
  } catch (error) {
    yield put(actionFail(error));
  }
}

export function* getSingleUser(action) {
  const { userId } = action.payload;

  try {
    const res = yield call(getSingleUserRequest, userId);
    const { data } = res.data;

    yield put(getSingleUserSuccess(data));
  } catch (error) {
    yield put(actionFail(error));
  }
}

export function* updateUser(action) {
  const { userId, firstName, lastName } = action.payload;

  try {
    const res = yield call(updateUserRequest, userId, firstName, lastName);

    yield put(updateUserSuccess(res.data));
  } catch (error) {
    yield put(actionFail(error));
  }
}

export function* createUser(action) {
  const { firstName, lastName } = action.payload;

  try {
    const res = yield call(createUserRequest, firstName, lastName);

    yield put(createUserSuccess(res.data));
  } catch (error) {
    yield put(actionFail(error));
  }
}

export function* watcherSaga() {
  yield takeLatest(GET_USERS_REQUEST, getUsers);
  yield takeLatest(GET_SINGLE_USER_REQUEST, getSingleUser);
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}

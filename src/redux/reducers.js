import { combineReducers } from "redux";

import { rowsPerPage } from "config";
import {
  GET_USERS_SUCCES,
  GET_SINGLE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  CREATE_USER_SUCCESS
} from "redux/actions";

const usersInitialState = {
  currentPage: 0,
  rowsPerPage: rowsPerPage,
  totalRows: 0,
  // Array.<{id: string, avatar: string, firstName: string, lastName: string}>
  items: []
};

const singleUserInitialState = {
  id: 0,
  avatar: "",
  firstName: "",
  lastName: "",
  updated: false
};

const users = (state = usersInitialState, action) => {
  const { type } = action;

  switch (type) {
    case GET_USERS_SUCCES: {
      const { page, per_page, total, data } = action.payload;
      const items = data.map(item => {
        const fullName = [item.first_name, item.last_name]
          .filter(item => !!item)
          .join(" ");

        return {
          id: item.id,
          avatar: item.avatar,
          fullName,
          firstName: item.first_name,
          lastName: item.last_name
        };
      });

      return {
        ...state,
        currentPage: Math.max(page - 1, 0),
        rowsPerPage: per_page,
        totalRows: total,
        items: items
      };
    }
    default:
      return state;
  }
};

const singleUser = (state = singleUserInitialState, action) => {
  const { type } = action;

  switch (type) {
    case GET_SINGLE_USER_SUCCESS: {
      const { id, avatar, first_name, last_name } = action.payload;

      return {
        ...state,
        id,
        avatar,
        firstName: first_name,
        lastName: last_name,
        updated: false
      };
    }
    case UPDATE_USER_SUCCESS: {
      const { first_name, last_name } = action.payload;

      return {
        ...state,
        firstName: first_name,
        lastName: last_name,
        updated: true
      };
    }
    case CREATE_USER_SUCCESS: {
      const { first_name, last_name } = action.payload;

      return {
        ...state,
        firstName: first_name,
        lastName: last_name,
        updated: true
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  users,
  singleUser
});

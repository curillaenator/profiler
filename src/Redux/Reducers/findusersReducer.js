import { usersAPI } from "../../API/api";
import * as flow from "../ReduxUtils/findusersFlow";

const initialState = {
  users: [],
  pageSize: 24,
  pageQuantize: 8,
  totalUsers: 0,
  currentPage: 1,
  isFetching: false,
  whileFollow: [],
};

export const findusersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      const followTrue = { followed: true };
      return {
        ...state,
        users: flow.followUser(state.users, action.id, "id", followTrue),
      };
    case "UNFOLLOW":
      const followFalse = { followed: false };
      return {
        ...state,
        users: flow.followUser(state.users, action.id, "id", followFalse),
      };
    case "WHILE-FOLLOW":
      return {
        ...state,
        whileFollow: action.bool
          ? [...state.whileFollow, action.id]
          : state.whileFollow.filter((id) => id !== action.id),
      };
    case "SET-TOTALUSERS":
      return { ...state, totalUsers: action.total };
    case "SET-USERS":
      return { ...state, users: [...action.users] };
    case "SET-CURRENTPAGE":
      return { ...state, currentPage: action.page };
    case "IS-FETCHING":
      return { ...state, isFetching: action.fetch };
    default:
      return state;
  }
};

// ACTIONS

const follow = (id) => ({ type: "FOLLOW", id });
const unfollow = (id) => ({ type: "UNFOLLOW", id });
export const whileFollow = (id, bool) => ({ type: "WHILE-FOLLOW", id, bool });
const setUsers = (users) => ({ type: "SET-USERS", users });
const setTotalUsers = (total) => ({ type: "SET-TOTALUSERS", total });
const currentPage = (page) => ({ type: "SET-CURRENTPAGE", page });
const fetching = (fetch) => ({ type: "IS-FETCHING", fetch });

// THUNKS

export const requestUsers = (page, pageSize) => (dispatch) => {
  dispatch(fetching(true));
  dispatch(currentPage(page));
  usersAPI.getUsers(page, pageSize).then((data) => {
    dispatch(setTotalUsers(data.totalCount));
    dispatch(setUsers(data.items));
    dispatch(fetching(false));
  });
};

export const setCurrentPage = (page) => (dispatch) => {
  dispatch(currentPage(page));
};

export const follower = (id) => (dispatch) =>
  flow.follow(id, dispatch, usersAPI.follow.bind(usersAPI), follow);

export const unfollower = (id) => (dispatch) =>
  flow.follow(id, dispatch, usersAPI.unfollow.bind(usersAPI), unfollow);

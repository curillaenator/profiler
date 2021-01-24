import { usersAPI } from "../../API/api";

const initialState = {
  users: [],
  pagesize: 12,
  totalusers: 0,
  currentpage: 1,
  isFetching: false,
  whileFollow: [],
};

export const findusersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "WHILE-FOLLOW":
      return {
        ...state,
        whileFollow: action.bool
          ? [...state.whileFollow, action.id]
          : state.whileFollow.filter((id) => id !== action.id),
      };
    case "SET-TOTALUSERS":
      return { ...state, totalusers: action.total };
    case "SET-USERS":
      return { ...state, users: [...action.users] };
    case "SET-CURRENTPAGE":
      return { ...state, currentpage: action.page };
    case "IS-FETCHING":
      return { ...state, isFetching: action.fetch };
    default:
      return state;
  }
};

// ACTIONS

export const follow = (id) => ({ type: "FOLLOW", id });
export const unfollow = (id) => ({ type: "UNFOLLOW", id });
export const whileFollow = (id, bool) => ({ type: "WHILE-FOLLOW", id, bool });
export const setUsers = (users) => ({ type: "SET-USERS", users });
export const setTotalUsers = (total) => ({ type: "SET-TOTALUSERS", total });
export const setCurrentPage = (page) => ({ type: "SET-CURRENTPAGE", page });
export const fetching = (fetch) => ({ type: "IS-FETCHING", fetch });

// THUNKS

export const getUsers = (page, pagesize) => (dispatch) => {
  dispatch(fetching(true));
  dispatch(setCurrentPage(page));
  usersAPI.getUsers(page, pagesize).then((data) => {
    dispatch(setTotalUsers(data.totalCount));
    dispatch(setUsers(data.items));
    dispatch(fetching(false));
  });
};

export const follower = (id) => (dispatch) => {
  dispatch(whileFollow(id, true));
  usersAPI.follow(id).then((data) => {
    if (data.resultCode === 0) dispatch(follow(id));
    dispatch(whileFollow(id, false));
  });
};
export const unfollower = (id) => (dispatch) => {
  dispatch(whileFollow(id, true));
  usersAPI.unfollow(id).then((data) => {
    if (data.resultCode === 0) dispatch(unfollow(id));
    dispatch(whileFollow(id, false));
  });
};

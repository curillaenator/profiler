import { usersAPI } from "../../API/api";
import { SingleUser } from "../../Types/Types"; // Types
import * as flow from "../ReduxUtils/findusersFlow";

const FOLLOW = "findusersReducer/FOLLOW";
const UNFOLLOW = "findusersReducer/UNFOLLOW";
const WHILE_FOLLOW = "findusersReducer/WHILE_FOLLOW";
const SET_TOTALUSERS = "findusersReducer/SET_TOTALUSERS";
const SET_USERS = "findusersReducer/SET_USERS";
const SET_CURRENTPAGE = "findusersReducer/SET_CURRENTPAGE";
const SET_CURRENT_QUANTIZE = "findusersReducer/SET_CURRENT_QUANTIZE";
const IS_FETCHING = "findusersReducer/IS_FETCHING";

const initialState = {
  users: [] as Array<SingleUser>,
  pageSize: 50,
  pageQuant: 10, // sets qty of pages buttons in pagination
  currentQuant: 0,
  totalUsers: 0,
  currentPage: 1,
  isFetching: false,
  whileFollow: [] as Array<number>, // while fetching for follow disables follow button for particular id
};
type InitialState = typeof initialState;

export const findusersReducer = (
  state = initialState,
  action: any
): InitialState => {
  switch (action.type) {
    case FOLLOW:
      const followTrue = { followed: true };
      return {
        ...state,
        users: flow.followUser(state.users, action.id, "id", followTrue),
      };
    case UNFOLLOW:
      const followFalse = { followed: false };
      return {
        ...state,
        users: flow.followUser(state.users, action.id, "id", followFalse),
      };
    case WHILE_FOLLOW:
      return {
        ...state,
        whileFollow: action.bool
          ? [...state.whileFollow, action.id]
          : state.whileFollow.filter((id) => id !== action.id),
      };
    case SET_TOTALUSERS:
      return { ...state, totalUsers: action.total };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_CURRENTPAGE:
      return { ...state, currentPage: action.page };
    case SET_CURRENT_QUANTIZE:
      return { ...state, currentQuant: action.q };
    case IS_FETCHING:
      return { ...state, isFetching: action.fetch };
    default:
      return state;
  }
};

// ACTIONS

type Follow = { type: typeof FOLLOW; id: number };
const follow = (id: number): Follow => ({ type: FOLLOW, id });

type Unfollow = { type: typeof UNFOLLOW; id: number };
const unfollow = (id: number): Unfollow => ({ type: UNFOLLOW, id });

type WhileFollow = { type: typeof WHILE_FOLLOW; id: number; bool: boolean };
export const whileFollow = (id: number, bool: boolean): WhileFollow => ({
  type: WHILE_FOLLOW,
  id,
  bool,
});

type SetTotalUsers = { type: typeof SET_TOTALUSERS; total: number };
const setTotalUsers = (total: number): SetTotalUsers => ({
  type: SET_TOTALUSERS,
  total,
});

type SetUsers = { type: typeof SET_USERS; users: Array<SingleUser> };
const setUsers = (users: Array<SingleUser>): SetUsers => ({
  type: SET_USERS,
  users,
});

type CurrentPage = { type: typeof SET_CURRENTPAGE; page: number };
const currentPage = (page: number): CurrentPage => ({
  type: SET_CURRENTPAGE,
  page,
});

type CurrentQuantize = { type: typeof SET_CURRENT_QUANTIZE; q: number };
const currentQuantize = (q: number): CurrentQuantize => ({
  type: SET_CURRENT_QUANTIZE,
  q,
});

type Fetching = { type: typeof IS_FETCHING; fetch: boolean };
const fetching = (fetch: boolean): Fetching => ({ type: IS_FETCHING, fetch });

// THUNKS

export const requestUsers = (page: number, pageSize: number) => (
  dispatch: any
) => {
  dispatch(fetching(true));
  dispatch(currentPage(page));
  usersAPI.getUsers(page, pageSize).then((data: any) => {
    dispatch(setTotalUsers(data.totalCount));
    dispatch(setUsers(data.items));
    dispatch(fetching(false));
  });
};

export const setCurrentPage = (page: number, q: number) => (dispatch: any) => {
  dispatch(currentPage(page));
  dispatch(currentQuantize(q));
};

export const follower = (id: number) => (dispatch: any) =>
  flow.follow(id, dispatch, usersAPI.follow.bind(usersAPI), follow);

export const unfollower = (id: number) => (dispatch: any) =>
  flow.follow(id, dispatch, usersAPI.unfollow.bind(usersAPI), unfollow);

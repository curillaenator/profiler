import { whileFollow } from "../Reducers/findusersReducer";

// REDUCER utils

export const followUser = (arr, param, key, set) =>
  arr.map((el) => (el[key] === param ? { ...el, ...set } : el));

// THUNKs utils

export const follow = async (id, dispatch, api, action) => {
  dispatch(whileFollow(id, true));
  const data = await api(id);
  if (data.resultCode === 0) dispatch(action(id));
  dispatch(whileFollow(id, false));
};

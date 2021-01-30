import { profileAPI } from "../../API/api";

const initialState = {
  user: null,
  socials: ["github", "facebook", "vk", "instagram", "youtube"],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-USER":
      return { ...state, user: action.user };

    default:
      return state;
  }
};

// ACTIONS

const setUser = (user) => ({ type: "SET-USER", user });

// THUNKS

export const setProfile = (userId) => (dispatch) => {
  profileAPI.setProfile(userId).then((r) => dispatch(setUser(r)));
};

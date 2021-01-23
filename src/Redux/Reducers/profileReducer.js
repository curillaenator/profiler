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

export const setUser = (user) => ({ type: "SET-USER", user });

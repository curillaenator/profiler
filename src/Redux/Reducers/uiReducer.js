const initialState = {
  menuButtons: {
    user: "профиль",
    skills: "навыки",
    works: "мои работы",
    dialogs: "общение",
  },
  menuParams: {
    height: "",
  },
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU-HEIGHT":
      state.menuParams.height = action.height;
      break;

    default:
      break;
  }
  return state;
};

export const actionMenuHeight = (height) => ({
  type: "MENU-HEIGHT",
  height: height,
});

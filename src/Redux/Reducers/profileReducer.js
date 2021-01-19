const initialState = {
  user: {
    name: "Кирилл",
    last: "Артуров",
    age: "34",
    ageWord: "",
    city: "Москва",
    job: "Фронтэнд-разработчик",
    avatar:
      "https://sun9-7.userapi.com/impf/j0cdtEStioZ8anGvgOtRABCK_xzzYcykaMH6Xw/3n8YZp63Olw.jpg?size=2560x1707&quality=96&proxy=1&sign=804085343fc4f6b83fb371acd37673c8&type=album",
    image:
      "https://realthouse.com/wp-content/uploads/2018/04/%D0%92%D1%8C%D0%B5%D1%82%D0%BD%D0%B0%D0%BC-%D0%B1%D1%83%D1%85%D1%82%D0%B0-%D1%85%D0%B0%D0%BB%D0%BE%D0%BD%D0%B3-min-1024x576.jpg",
  },
};

export const profileReducer = (state = initialState, action) => {
  let st = { ...state, user: { ...state.user } };
  switch (action.type) {
    case "AGE-WORDER":
      let ager = action.age > 20 ? action.age % 10 : action.age;
      let word = "";
      switch (ager) {
        case 1:
          word = "год";
          break;
        case 2:
        case 3:
        case 4:
          word = "года";
          break;
        default:
          word = "лет";
          break;
      }
      st.user.ageWord = word;
      break;

    default:
      break;
  }
  return st;
};

export const actionAgeWorder = (age) => ({
  type: "AGE-WORDER",
  age: age,
});

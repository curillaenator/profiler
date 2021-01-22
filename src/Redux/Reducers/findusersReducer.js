// const usersexample = [
//   {
//     id: 0,
//     follow: true,
//     ava:
//       "https://sun9-61.userapi.com/impf/c851024/v851024788/1a3136/v0hgAY-zwus.jpg?size=2560x1707&quality=96&proxy=1&sign=8af9bf8f3c60407321cf9f8e62c657a5&type=album",
//     name: "Кирилл",
//     lastname: "Art",
//     job: "Фронтэнд разработчик",
//     location: { country: "Россия", city: "Москва" },
//   },
//   {
//     id: 1,
//     follow: true,
//     ava:
//       "https://sun9-30.userapi.com/impf/c630117/v630117750/1c46/D6wZxvlloyw.jpg?size=1440x2160&quality=96&proxy=1&sign=ce21167328ad198bcd15e27dc2ce0c49&type=album",
//     name: "Андрей",
//     lastname: "DustyART",
//     job: "UI/UX Дизайнер",
//     location: { country: "Россия", city: "Москва" },
//   },
//   {
//     id: 2,
//     follow: false,
//     ava: "https://sun9-34.userapi.com/c855432/v855432593/b3569/B1cF9mI6h-g.jpg",
//     name: "Крипота",
//     lastname: "Криповнишна",
//     job: "Ужасонаводитель",
//     location: { country: "Темень", city: "Мрачный" },
//   },
// ];

const initialState = {
  users: [],
  pagesize: 12,
  totalusers: 0,
  currentpage: 1,
  isFetching: false,
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

export const follow = (id) => ({ type: "FOLLOW", id });
export const unfollow = (id) => ({ type: "UNFOLLOW", id });
export const setUsers = (users) => ({ type: "SET-USERS", users });
export const setTotalUsers = (total) => ({ type: "SET-TOTALUSERS", total });
export const setCurrentPage = (page) => ({ type: "SET-CURRENTPAGE", page });
export const fetching = (fetch) => ({ type: "IS-FETCHING", fetch });

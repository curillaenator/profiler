const initialState = {
  title: "",
  text: "",
  posts: [
    {
      id: "0005",
      date: "10 янв. 2021 г.",
      title: "Учи Реакт!",
      text:
        "React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.",
    },
    {
      id: "0000",
      date: "7 янв. 2021 г.",
      title: "Москоу",
      text:
        "Москва – столица России, многонациональный город на Москве-реке в западной части страны.",
    },
  ],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TITLE-HANDLE":
      return { ...state, title: action.ttl };
    case "TEXT-HANDLE":
      return { ...state, text: action.txt };
    case "NOTE-CREATE":
      const idsArr = state.posts.map((p) => p.id);
      const dater = (op) => new Date().toLocaleString("ru", op);
      if (state.text !== "" && state.title !== "") {
        return {
          ...state,
          posts: [
            {
              id: String(Math.max(...idsArr) + 10001).slice(-4),
              date: dater({ year: "numeric", month: "short", day: "numeric" }),
              title: state.title,
              text: state.text,
            },
            ...state.posts,
          ],
          title: "",
          text: "",
        };
      }
      return state;
    default:
      return state;
  }
};

export const handleTitle = (t) => ({ type: "TITLE-HANDLE", ttl: t });
export const handleText = (t) => ({ type: "TEXT-HANDLE", txt: t });
export const createNote = () => ({ type: "NOTE-CREATE" });

const initialState = {
  notes: [
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
    case "NOTE-CREATE":
      const idsArr = state.notes.map((p) => p.id);
      const dater = (op) => new Date().toLocaleString("ru", op);
      return {
        ...state,
        notes: [
          {
            id: String(Math.max(...idsArr) + 10001).slice(-4),
            date: dater({ year: "numeric", month: "short", day: "numeric" }),
            title: action.note.title,
            text: action.note.text,
          },
          ...state.notes,
        ],
      };
    default:
      return state;
  }
};

export const createNote = (note) => ({ type: "NOTE-CREATE", note });

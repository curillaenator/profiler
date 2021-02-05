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

const NOTE_CREATE = "notesReducer/NOTE-CREATE";
const NOTE_DELETE = "notesReducer/NOTE-DELETE";

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_CREATE:
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
    case NOTE_DELETE:
      return { ...state, notes: state.notes.filter((n) => n.id !== action.id) };
    default:
      return state;
  }
};

export const createNote = (note) => ({ type: NOTE_CREATE, note });
export const deleteNote = (id) => ({ type: NOTE_DELETE, id });

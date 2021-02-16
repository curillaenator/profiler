type Note = {
  id: string;
  date: string;
  title: string;
  text: string;
};
type Options = {
  year: string;
  month: string;
  day: string;
};

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
  ] as Array<Note>,
};
type InitialState = typeof initialState;

const NOTE_CREATE: string = "notesReducer/NOTE-CREATE";
const NOTE_DELETE: string = "notesReducer/NOTE-DELETE";

export const notesReducer = (
  state = initialState,
  action: any
): InitialState => {
  switch (action.type) {
    case NOTE_CREATE:
      const idsArr: Array<number> = state.notes.map((p) => +p.id);
      const dater = (opts: Options): string =>
        new Date().toLocaleString("ru", opts);
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
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.id),
      };
    default:
      return state;
  }
};

// ACTIONS

type NoteInp = {
  title: string;
  text: string;
};
type CreateNote = { type: typeof NOTE_CREATE; note: NoteInp };
export const createNote = (note: NoteInp): CreateNote => ({
  type: NOTE_CREATE,
  note,
});

type DeleteNote = { type: typeof NOTE_DELETE; id: string };
export const deleteNote = (id: string): DeleteNote => ({
  type: NOTE_DELETE,
  id,
});

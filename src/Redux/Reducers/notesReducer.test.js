import { notesReducer, createNote, deleteNote } from "./notesReducer";
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

it("message text should be exact", () => {
  // 1. test data
  const action = createNote({ title: "test", text: "test-test-test" });
  // 2. action
  const newState = notesReducer(initialState, action);
  // 3.expectation
  expect(newState.notes[0].text).toBe("test-test-test");
});

it("message should be deleted", () => {
  const action = deleteNote("0005");
  const newState = notesReducer(initialState, action);
  expect(newState.notes.length).toBe(1);
});

it("same postArray if id incorrect", () => {
  const action = deleteNote("0050");
  const newState = notesReducer(initialState, action);
  expect(newState.notes.length).toBe(2);
});

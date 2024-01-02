import { createStore } from "redux";
import notesReducer from "./notesReducer";
import { Note } from "./NoteActions";

export interface RootState {
  notes: Note[];
  loading: boolean;
  noteText: string;
  noteTitle: string;
  handleAddNote: boolean;
  updateRequest: Note | null;
}

const store = createStore(notesReducer);

export default store;

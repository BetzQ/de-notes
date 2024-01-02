import {
  NoteAction,
  SET_NOTE_TEXT,
  ADD_NOTE,
  SET_LOADING,
  Note,
  HANDLE_ADD_NOTE,
  SET_NOTE_TITLE,
  SET_UPDATE_REQUEST,
  CLEAR_UPDATE_REQUEST,
  UPDATE_NOTE,
} from "./NoteActions";

export interface NotesState {
  notes: Note[];
  loading: boolean;
  noteText: string;
  noteTitle: string;
  handleAddNote: boolean;
  updateRequest: Note | null;
}

const initialState: NotesState = {
  notes: [],
  loading: false,
  noteText: "",
  noteTitle: "",
  handleAddNote: false,
  updateRequest: null,
};

const notesReducer = (
  state: NotesState = initialState,
  action: NoteAction
): NotesState => {
  switch (action.type) {
    case ADD_NOTE: {
      const newState = {
        ...state,
        notes: [...state.notes, action.payload as Note],
        loading: false,
      };
      return newState;
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload as boolean,
      };
    }
    case SET_NOTE_TEXT: {
      return {
        ...state,
        noteText: action.payload as string,
      };
    }
    case SET_NOTE_TITLE: {
      return {
        ...state,
        noteTitle: action.payload as string,
      };
    }
    case HANDLE_ADD_NOTE: {
      return {
        ...state,
        handleAddNote: action.payload as boolean,
      };
    }
    case SET_UPDATE_REQUEST: {
      return {
        ...state,
        updateRequest: action.payload,
      };
    }
    case CLEAR_UPDATE_REQUEST: {
      return {
        ...state,
        updateRequest: null,
      };
    }
    case UPDATE_NOTE: {
      const updatedNotes = state.notes.map((note) =>
        note.id === action.payload.id ? { ...note, ...action.payload } : note
      );
      return {
        ...state,
        notes: updatedNotes,
      };
    }
    default:
      return state;
  }
};

export default notesReducer;
export type NotesReducerType = ReturnType<typeof notesReducer>;

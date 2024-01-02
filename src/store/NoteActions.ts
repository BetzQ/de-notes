export interface Note {
  id: string;
  title: string;
  text: string;
}

export const ADD_NOTE = "ADD_NOTE" as const;
export const SET_LOADING = "SET_LOADING" as const;
export const UPDATE_NOTE = "UPDATE_NOTE" as const;
export const SET_NOTE_TEXT = "SET_NOTE_TEXT" as const;
export const SET_NOTE_TITLE = "SET_NOTE_TITLE" as const;
export const HANDLE_ADD_NOTE = "HANDLE_ADD_NOTE" as const;
export const SET_UPDATE_REQUEST = "SET_UPDATE_REQUEST" as const;
export const CLEAR_UPDATE_REQUEST = "CLEAR_UPDATE_REQUEST" as const;

export const addNote = (note: Note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const setLoading = (loading: boolean) => {
  return {
    type: SET_LOADING,
    payload: loading,
  };
};

export const setNoteText = (text: string) => {
  return {
    type: SET_NOTE_TEXT,
    payload: text,
  };
};

export const setNoteTitle = (title: string) => {
  return {
    type: SET_NOTE_TITLE,
    payload: title,
  };
};

export const handleAddNote = (value: boolean) => {
  return {
    type: HANDLE_ADD_NOTE,
    payload: value,
  };
};

export const updateNote = (note: Note) => {
  return {
    type: UPDATE_NOTE,
    payload: note,
  };
};

export const setUpdateRequest = (note: Note) => ({
  type: SET_UPDATE_REQUEST,
  payload: note,
});

export const clearUpdateRequest = () => ({
  type: CLEAR_UPDATE_REQUEST,
});

export type NoteAction =
  | ReturnType<typeof addNote>
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setNoteText>
  | ReturnType<typeof handleAddNote>
  | ReturnType<typeof setNoteTitle>
  | ReturnType<typeof setUpdateRequest>
  | ReturnType<typeof clearUpdateRequest>
  | ReturnType<typeof updateNote>;

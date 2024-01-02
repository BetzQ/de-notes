import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNoteText, handleAddNote, setNoteTitle } from "../store/NoteActions";
import { RootState } from "../store/store";

const NoteForm: React.FC = () => {
  const dispatch = useDispatch();
  const handleAddNoteFlag = useSelector(
    (state: RootState) => state.handleAddNote
  );
  const noteText = useSelector((state: RootState) => state.noteText);
  const noteTitle = useSelector((state: RootState) => state.noteTitle);

  const runAddNote = () => {
    dispatch(handleAddNote(true));
  };

  const handleNoteTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNoteText(e.target.value));
  };

  const handleNoteTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNoteTitle(e.target.value));
  };

  return (
    <div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Create a new note
      </label>
      <input
        type="text"
        id="first_name"
        value={handleAddNoteFlag ? "" : noteTitle}
        onChange={handleNoteTitleChange}
        placeholder="Enter note title"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
        disabled={handleAddNoteFlag}
        required
      />

      <textarea
        id="message"
        rows={4}
        value={handleAddNoteFlag ? "" : noteText}
        onChange={handleNoteTextChange}
        placeholder="Leave a comment..."
        disabled={handleAddNoteFlag}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        onClick={runAddNote}
        type="button"
        className="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2"
        disabled={handleAddNoteFlag}
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteForm;

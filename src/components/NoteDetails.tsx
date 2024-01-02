import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateRequest } from "../store/NoteActions";
import { useParams } from "react-router-dom";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

const NoteDetails: React.FC = () => {
  const { id } = useParams();
  const notes = useSelector((state: RootState) => state.notes);
  const updateRequest = useSelector((state: RootState) => state.updateRequest);
  const note = notes.find((note) => note.id === id);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(note?.title || "");
  const [text, setText] = useState(note?.text || "");

  useEffect(() => {
    if (updateRequest === null) {
      setTitle(note?.title || "");
      setText(note?.text || "");
    }
  }, [updateRequest, note?.title, note?.text]);

  if (!note) {
    return <div>Catatan tidak ditemukan</div>;
  }

  const handleUpdate = () => {
    dispatch(setUpdateRequest({ id: note?.id, title, text }));
  };

  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center px-2 py-2 mb-2 border border-transparent text-sm font-medium rounded-md text-white hover:text-white/70 focus:outline-none"
      >
        &#11164; <span className="px-2">Back</span>
      </Link>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Update your note
      </label>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter note title"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"
        required
        disabled={updateRequest ? true : false}
      />

      <textarea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Leave a comment..."
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        disabled={updateRequest ? true : false}
      />

      <button
        onClick={handleUpdate}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-3"
      >
        Update Note
      </button>
    </div>
  );
};

export default NoteDetails;

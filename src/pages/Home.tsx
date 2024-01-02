import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Note } from "../store/NoteActions";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";

const Home: React.FC = () => {
  const notes = useSelector<RootState, Note[]>((state) => state.notes);

  return (
    <div>
      <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        Notes
      </h2>
      <ul className="flex flex-wrap">
        {notes && notes.length > 0 ? (
          notes.map((note, index) => (
            <NoteItem key={index} note={note} index={index} />
          ))
        ) : (
          <div className="flex items-center justify-center h-full w-full mt-2">
            <p className="text-gray-600 dark:text-gray-400">
              No notes available.
            </p>
            <Link
              to="/notes/new"
              className="ml-2 text-blue-500 hover:underline"
            >
              Create a new note
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Home;

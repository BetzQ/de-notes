import React from "react";
import { Link } from "react-router-dom";
import { Note } from "../store/NoteActions";

type NoteItemProps = {
  note: Note;
  index: number;
};

const NoteItem: React.FC<NoteItemProps> = ({ note, index }) => {
  return (
    <li key={index} className="w-full md:w-1/3 p-4">
      <Link
        to={`/notes/${note.id}`}
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {note.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {note.text}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default NoteItem;

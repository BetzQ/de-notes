import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Loading from "./Loading";
import {
  addNote,
  clearUpdateRequest,
  handleAddNote,
  setLoading,
  setNoteText,
  setNoteTitle,
  updateNote,
} from "../store/NoteActions";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.loading);
  const handleAddNoteFlag = useSelector(
    (state: RootState) => state.handleAddNote
  );
  const noteTitle = useSelector((state: RootState) => state.noteTitle);
  const noteText = useSelector((state: RootState) => state.noteText);
  const updateRequest = useSelector((state: RootState) => state.updateRequest);
  const location = useLocation();

  const [activeLink, setActiveLink] = useState<string | null>(null);
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const generateUniqueId = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  useEffect(() => {
    if (handleAddNoteFlag) {
      dispatch(setLoading(true));

      const delay = setTimeout(() => {
        const newNote = {
          id: generateUniqueId(),
          title: noteTitle,
          text: noteText,
        };
        dispatch(addNote(newNote));
        dispatch(setNoteTitle(""));
        dispatch(setNoteText(""));
        dispatch(setLoading(false));
        dispatch(handleAddNote(false));
      }, 1000);

      return () => {
        clearTimeout(delay);
      };
    }
  }, [handleAddNoteFlag, noteTitle, noteText, dispatch]);

  useEffect(() => {
    if (updateRequest) {
      dispatch(setLoading(true));

      const delay = setTimeout(() => {
        dispatch(updateNote(updateRequest));
        dispatch(clearUpdateRequest());
        dispatch(setLoading(false));
      }, 2000);

      return () => clearTimeout(delay);
    }
  }, [updateRequest, dispatch]);

  const handleLinkClick = (nav: string) => {
    setActiveLink(nav);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  activeLink === "/"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900"
                }`}
                onClick={() => handleLinkClick("/")}
              >
                Note List
              </Link>
            </li>
            <li>
              <Link
                to="/notes/new"
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  activeLink === "/notes/new"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900"
                }`}
                onClick={() => handleLinkClick("/notes/new")}
              >
                New Note
              </Link>
            </li>
            <li>{loading && <Loading />}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

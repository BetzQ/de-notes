import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store/store";
import Navigation from "./components/Navigation";
import NoteDetails from "./components/NoteDetails";
import Home from "./pages/Home";
import NoteForm from "./pages/NoteForm";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <h2 className="text-2xl font-bold dark:text-white">Not Found</h2>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="dark:bg-black min-h-screen">
          <Navigation />
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Note App</h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notes/new" element={<NoteForm />} />
              <Route path="/notes/:id" element={<NoteDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

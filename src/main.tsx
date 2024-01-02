window.addEventListener("load", () => {
  const originalConsoleWarn = console.warn;
  console.warn = function (message, ...args) {
    if (
      message.includes("cdn.tailwindcss.com should not be used in production")
    ) {
      return;
    }
    originalConsoleWarn.call(this, message, ...args);
  };
});

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="w-full min-h-screen bg-black text-white flex justify-center items-center">
      <App />
    </main>
  </React.StrictMode>
);

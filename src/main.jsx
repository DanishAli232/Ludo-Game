import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LudoContext } from "./Context/LudoContext";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LudoContext>
      <App />
    </LudoContext>
  </React.StrictMode>
);

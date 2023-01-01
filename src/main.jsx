import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LudoContext } from "./Context/LudoContext";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Router> */}
    <LudoContext>
      <App />
    </LudoContext>
    {/* </Router> */}
  </React.StrictMode>
);

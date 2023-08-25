import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import MyContext from "./utils/constans/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyContext.Provider value={false}>
        <App />
      </MyContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

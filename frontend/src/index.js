import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
/*import { Provider } from "react-redux";
import { createStore } from "redux"; */
import reducers from "./reducers";

import "./index.css";
import { App } from "./App.js";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import "./styles/App.css";

const initialState = {
  flight: null,
  user: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FLIGHT":
      return { ...state, flight: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

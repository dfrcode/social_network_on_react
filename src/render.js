import React from "react";
import ReactDOM from "react-dom";
import { newPost } from "./state/state";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const rerenderTreeDom = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} newPost={newPost} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

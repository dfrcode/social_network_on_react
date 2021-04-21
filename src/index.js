import React from "react";
import ReactDOM from "react-dom";
import state, { newPost, changeValue, subscribe } from "./state/state";
import App from "./App";

let rerenderTreeDom = (state) => {
  ReactDOM.render(
    <App state={state} newPost={newPost} changeValue={changeValue} />,
    document.getElementById("root")
  );
};

rerenderTreeDom(state);

subscribe(rerenderTreeDom);
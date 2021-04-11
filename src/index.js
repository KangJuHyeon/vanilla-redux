import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (state = 0) => {
  // console.log(state);
  return state;
};

const store = createStore(reducer);
console.log(store.getState());
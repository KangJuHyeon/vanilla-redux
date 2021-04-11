import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const reducer = (count = 0, action) => {
  if (action.type === "ADD"){
    return count + 1;
  } else if(action.type === "MINUS"){
    return count - 1;
  } else{
    return count;
  }
};


const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
}

store.subscribe(onChange);  // 이 function은 store에 변화가 있을 때마다 감지해서 불려질 거야!

const handleAdd = () => {
  store.dispatch({type: "ADD" });
}

const handleMinus = () => {
  store.dispatch({type: "MINUS" });
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
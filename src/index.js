import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD"){
    return count + 1;
    // console.log('they are telling me to add one');
  } else if(action.type === "MINUS"){
    return count - 1;
  } else{
    return count;
  }
};

const store = createStore(reducer);


store.dispatch({type: "ADD"});
store.dispatch({type: "ADD"});
store.dispatch({type: "ADD"});
store.dispatch({type: "ADD"});
store.dispatch({type: "ADD"});
store.dispatch({type: "MINUS"}); 
// 결과값 4

console.log(store.getState());
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS"

const reducer = (count = 0, action) => {
  switch(action.type){
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count;
  }
};
// if, else if 문을 사용할수도 있지만 대부분 사람들은 대신 switch를 사용한다
// 왜? 이것이 첫 번째 improvement(개선 사항)이다.
// 이것은 redux 공식 홈페이지에서도 있다.
// 두 번째 improvement는 우리가 string을 사용한다는 것이다. => string을 쓰는 대신에 string을 담아주는 함수를 사용하는 것이 더 좋다
// 왜? 위에 처럼 string을 사용한다면 자바스크립트가 아무것도 말해주지 않는다. 하지만 string을 함수에 담아서 사용하면 어디가 잘못되었다고 알려준다.
// 어디 부분을 잘못하나요? action 디스패치 안에 ADD가 ADDD 이렇게 잘못되면 자바스크립트가 알려준다.

const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
}

store.subscribe(onChange); 

const handleAdd = () => {
  store.dispatch({type: "ADD" });
}

const handleMinus = () => {
  store.dispatch({type: "MINUS" });
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
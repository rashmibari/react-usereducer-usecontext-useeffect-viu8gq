import React, { useReducer } from "react";

let btnStyle = {
  fontSize: "14px",
  color: "green",
  marginLeft: "5px",
  background: "#fff",
  border: "1px solid gray",
  height: "30px"
};
let inititalState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return inititalState;
  }
};
function useReduceExp() {
  const [counter, dispatch] = useReducer(reducer, inititalState);

  return (
    <div>
      <h2>Use Reducer Hook Example: {counter}</h2>
      <button style={btnStyle} onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button style={btnStyle} onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button style={btnStyle} onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default useReduceExp;

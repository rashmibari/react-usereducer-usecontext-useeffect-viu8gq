import React, { useEffect, useState } from "react";

function UseEffectsComponentDidMount() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component did Mount Exmaple");
  }, []); // Component did mount implemented

  useEffect(() => {
    console.log("Component did Update Exmaple");
  }, [count]); // Component did update implemented

  useEffect(() => {
    //if use Effects function returning any other function then that is the component will unmount implementation

    return () => {
      console.log("wihtin component will unmount function");
    };
  }); // Component will unmount implemented

  return (
    <div>
      <h3>Component did mount implementation Using UseEffect</h3>
      <button
        style={{
          color: "green",
          background: "#fff",
          border: "1px solid gray",
          height: "30px"
        }}
        onClick={() => setCount(preState => preState + 1)}
      >
        Use State Count Example : {count}
      </button>
      <h3>Component will unmount example using UseEffect</h3>
    </div>
  );
}

export default UseEffectsComponentDidMount;

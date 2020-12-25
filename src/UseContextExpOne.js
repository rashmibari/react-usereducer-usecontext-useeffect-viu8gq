import React, { useContext } from "react";
import { userContext, profileContext } from "./App";

function UseContextExpOne() {
  const user = useContext(userContext);
  const profile = useContext(profileContext);

  return (
    <div>
      <h2>Use Context Example </h2>
      <p style={{ color: "green" }}>User: {user}</p>
      <p style={{ color: "green" }}>Profile: {profile}</p>
    </div>
  );
}

export default UseContextExpOne;

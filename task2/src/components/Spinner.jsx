import React from "react";
import spinner from "../assests/spinner2.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;

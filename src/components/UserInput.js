import React from "react";
import "./style.css";

const userInput = (props) => {
  return (
    <div className="container">
      <input onChange={props.changed} value={props.currentUsername}></input>
    </div>
  );
};

export default userInput;

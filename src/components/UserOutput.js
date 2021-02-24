import React from "react";

const userOutput = (props) => {
  return (
    <div className="container">
      <p>Your name is {props.username}</p>
      <p>You are awesome! Keep on learning!</p>
    </div>
  );
};

export default userOutput;

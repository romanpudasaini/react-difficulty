/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./DisplayDifficulty.css";

const DisplayDifficulty = (props) => {
  return (
    <div>
      {props.difficulty
        ? `Difficulty set to ${props.difficulty}`
        : " Difficulty is not set"}
    </div>
  );
};

export default DisplayDifficulty;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";
import MunuList from "./components/MenuList/MunuList";
import "./App.css";

const App = () => {
  const [currentDifficulty, setCurrentDifficulty] = useState("Insane");
  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };
  return (
    <div>
      <h1>Select your React Diffficulty </h1>
      <div className="first">
        <MunuList onItemClick={onMenuListItemClick} />
        <div className="display">
          <DisplayDifficulty difficulty={currentDifficulty} />
        </div>
      </div>
    </div>
  );
};

export default App;

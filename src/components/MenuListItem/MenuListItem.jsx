/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./menuListItem.css";
import { useState } from "react";

const MenuListItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  function activate() {
    setIsHover(true);
  }
  function deactivate() {
    setIsHover(false);
  }
  function BackgroundColorChanged() {
    if (isHover) {
      return "#a5e9ff";
    } else {
      return "#eff0ef";
    }
  }
  const onItemClick = () => {
    props.onClick(props.difficulty);
  };
  console.log(isHover);
  return (
    <div
      onClick={onItemClick}
      className="container"
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: BackgroundColorChanged() }}
    >
      Set to : {props.difficulty}
    </div>
  );
};

export default MenuListItem;

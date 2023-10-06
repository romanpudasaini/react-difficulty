/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./menuList.css";
import { DIFFICULTIES } from "../../contents/Contents";
import MenuListItem from "../MenuListItem/MenuListItem";

const MunuList = (props) => {
  return (
    <div className="list">
      {DIFFICULTIES.map((difficulty) => {
        return (
          <MenuListItem onClick={props.onItemClick} difficulty={difficulty} />
        );
      })}
    </div>
  );
};

export default MunuList;

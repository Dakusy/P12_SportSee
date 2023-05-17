import React from "react";
import GetIcon from "./GetIcon";
import "../css/SideBar.css";


function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <GetIcon icon="yoga" />
        <GetIcon icon="swim" />
        <GetIcon icon="bike" />
        <GetIcon icon="dumbbell" />
      </div>
      <p className="sidebar-text">Copyright, SportSee 2023</p>
    </div>
  );
}

export default SideBar;
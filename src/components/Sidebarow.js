import React from "react";
import "./Sidebarow.css";
function Sidebarow({ selected, Icons, title }) {
  return (
    <div className={`sidebar-row ${selected && "selected"}`}>
      <Icons className="sidebar-icon" />
      <h2 className="sidebar-title">{title}</h2>
    </div>
  );
}

export default Sidebarow;

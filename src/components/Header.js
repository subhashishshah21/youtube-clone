import React from "react";
import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
function Header() {
  return (
    <div className="header">
      <div className="first-container">
        <MenuSharpIcon />
        <img
          className="header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>
      <div className="second-container">
        <input type="text" placeholder="Search" />
        <SearchIcon className="search-btn" />
      </div>
      <div className="last-container">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar alt="Subashish Jung Shah" src="" />
      </div>
    </div>
  );
}

export default Header;

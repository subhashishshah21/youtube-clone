import React from "react";
import "./Sidebar.css";
import Sidebarow from "./Sidebarow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <Sidebarow selected Icons={HomeIcon} title="Home" />
      <Sidebarow Icons={WhatshotIcon} title="Trending" />
      <Sidebarow Icons={SubscriptionsIcon} title="Subscription" />
      <hr />
      <Sidebarow Icons={VideoLibraryIcon} title="Library" />
      <Sidebarow Icons={HistoryIcon} title="History" />
      <Sidebarow Icons={OndemandVideoIcon} title="Your videos" />
      <Sidebarow Icons={WatchLaterIcon} title="Watch Later" />
      <Sidebarow Icons={ThumbUpOffAltIcon} title="Liked videos" />
      <Sidebarow Icons={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;

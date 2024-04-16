import { Chat, Notifications, Search } from "@mui/icons-material";
import React from "react";
import "./Topbar.css";

export const Topbar = () => {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Real SNS</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search />
            <input type="text" className="searchInput" placeholder="search" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <Chat className="topbarIcon" />
            <div className="topbarIconBadge">1</div>
          </div>
          <div className="topbarIconContainer">
            <Notifications className="topbarIcon" />
            <div className="topbarIconBadge">2</div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
      </div>
    </>
  );
};

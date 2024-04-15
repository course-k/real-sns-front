import { Chat, Notifications, Search } from "@mui/icons-material";
import React from "react";

export const Topbar = () => {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft"></div>
        <span className="logo">Real SNS</span>
        <div className="topbarCenter">
          <Search />
          <div className="searchBar">
            <input type="text" className="seachInput" placeholder="search" />
          </div>
        </div>
        <div className="topbarRight">
          <Chat />
          <div className="topbarIconItem">1</div>
          <Notifications />
          <div className="topbarIconItem">2</div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
      </div>
    </>
  );
};

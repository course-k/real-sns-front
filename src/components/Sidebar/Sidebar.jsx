import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import React from "react";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Home className="sidebarListItemIcon" />
              <span className="sidebarListItemText">HOME</span>
            </li>
            <li className="sidebarListItem">
              <Search className="sidebarListItemIcon" />
              <span className="sidebarListItemText">検索</span>
            </li>
            <li className="sidebarListItem">
              <Notifications className="sidebarListItemIcon" />
              <span className="sidebarListItemText">通知</span>
            </li>
            <li className="sidebarListItem">
              <MessageRounded className="sidebarListItemIcon" />
              <span className="sidebarListItemText">メッセージ</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className="sidebarListItemIcon" />
              <span className="sidebarListItemText">ブックマーク</span>
            </li>
            <li className="sidebarListItem">
              <Person className="sidebarListItemIcon" />
              <span className="sidebarListItemText">プロフィール</span>
            </li>
            <li className="sidebarListItem">
              <Settings className="sidebarListItemIcon" />
              <span className="sidebarListItemText">設定</span>
            </li>
          </ul>
          <hr className="sidebarHr" />
          <ul className="friendList">
            <li className="friendListItem">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="friendListItemIcon"
              />
              <span className="firentListItemName">friend</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

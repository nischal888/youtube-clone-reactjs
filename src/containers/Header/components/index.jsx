import React from "react";
import "../Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import youtubeLogo from "../../../assets/images/youtube.svg";

function HeaderComponent() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src={youtubeLogo} alt="YouTube Logo" />
      </div>
      <div className="header__input">
        <input type="text" />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__right">
        <VideoCallIcon className="header___iconMargin" />
        <AppsIcon className="header___iconMargin" />
        <NotificationsIcon className="header___iconMargin" />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default HeaderComponent;

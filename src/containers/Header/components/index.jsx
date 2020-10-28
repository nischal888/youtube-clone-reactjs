import React from "react";
import "../Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link, withRouter } from "react-router-dom";

import youtubeLogo from "../../../assets/images/youtube.svg";

class HeaderComponent extends React.Component {
  state = {
    searchQuery: "",
  };
  onChangeHandle = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  onSearchSubmit = () => {
    if (this.state.searchQuery !== "") {
      this.props.searchYoutubeVideo(this.state.searchQuery);
      this.setState({
        searchQuery: "",
      });
      this.props.history.push(`/search/${this.state.searchQuery}`);
    }
    // return <Redirect to={`/search/${this.state.searchQuery}`} />;
  };
  onEnterKey = (e) => {
    if (e.keyCode === 13) {
      this.onSearchSubmit();
    }
  };

  render() {
    return (
      <div className="header">
        <div className="header__left">
          <MenuIcon />
          <Link to="/">
            <img
              className="header__logo"
              src={youtubeLogo}
              alt="YouTube Logo"
            />
          </Link>
        </div>
        <div className="header__input">
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={this.onChangeHandle}
            onKeyDown={this.onEnterKey}
          />
          <SearchIcon
            className="header__inputButton"
            onClick={this.onSearchSubmit}
          />
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
}

export default withRouter(HeaderComponent);

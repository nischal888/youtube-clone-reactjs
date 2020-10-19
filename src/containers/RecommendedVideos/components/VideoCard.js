import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";

class VideoCardComponent extends Component {
  render() {
    const {
      image,
      title,
      channel,
      views,
      timestamp,
      channelImage,
    } = this.props;
    return (
      <div className="videoCard" onClick={this.props.click}>
        <img className="videoCard__thumbnail" src={image} alt="" />
        <div className="videoCard__info">
          <Avatar
            className="videoCard_avatar"
            alt={channel}
            src={channelImage}
          />
          <div className="videoCard_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} views • {timestamp.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoCardComponent;

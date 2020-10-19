import React, { Component } from "react";
import "../RecommendedVideos.css";
import VideoCard from "./VideoCard";
import VideoPlayer from "./VideoPlayer";

class RecommendedVideosComponent extends Component {
  state = {
    modelToggle: false,
    video: {
      videoID: "",
      videoTitle: "",
    },
  };

  componentDidMount() {
    this.props.getPopularVideos();
  }
  handleClose = () => {
    this.setState({
      modelToggle: !this.state.modelToggle,
    });
  };
  handleOpen = (id, title) => {
    this.setState({
      modelToggle: true,
      video: {
        videoID: id,
        videoTitle: title,
      },
    });
  };
  render() {
    const { popularVideos } = this.props;
    return (
      <div className="recommendedVideos">
        {popularVideos &&
          popularVideos.map((item) => {
            return (
              <VideoCard
                image={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                views={item.statistics.viewCount}
                timestamp={item.snippet.publishedAt}
                channelImage={item.snippet.thumbnails.default.url}
                key={item.id}
                click={() => this.handleOpen(item.id, item.snippet.title)}
              />
            );
          })}
        {this.state.modelToggle && (
          <VideoPlayer click={this.handleClose} videoID={this.state.video} />
        )}
      </div>
    );
  }
}

export default RecommendedVideosComponent;

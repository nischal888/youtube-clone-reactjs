import React, { Component } from "react";
import "../RecommendedVideos.css";
import VideoCard from "./VideoCard";
import VideoPlayer from "./VideoPlayer";
import InfiniteScroll from "react-infinite-scroller";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;
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
    const { popularVideos, pageInfo, token } = this.props;

    return (
      <div className="recommendedVideosWrap">
        {pageInfo && (
          <InfiniteScroll
            pageStart={0}
            hasMore={pageInfo.totalResults >= popularVideos.length}
            loadMore={() => this.props.getPopularVideos(token)}
            loader={
              <Spin
                indicator={antIcon}
                key={token}
                className="custom__spinner"
              />
            }
          >
            <div className="recommendedVideos">
              {popularVideos.map((item) => {
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
            </div>
          </InfiniteScroll>
        )}
        {this.state.modelToggle && (
          <VideoPlayer click={this.handleClose} videoID={this.state.video} />
        )}
      </div>
    );
  }
}

export default RecommendedVideosComponent;

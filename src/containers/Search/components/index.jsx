import React from "react";
import "../Search.css";
import SearchCard from "./SearchCard";
import VideoPlayer from "../../RecommendedVideos/components/VideoPlayer";

class SearchComponents extends React.Component {
  state = {
    modelToggle: false,
    video: {
      videoID: "",
      videoTitle: "",
    },
  };
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
  componentWillUnmount() {
    this.props.resetSearchFlag();
  }
  render() {
    const { searchVideo } = this.props;
    return (
      <div className="searchPageWrap">
        <h2 style={{ marginBottom: 30 }}>Search Results:</h2>
        <div className="searchPage">
          <br />
          {searchVideo &&
            searchVideo.map((item) => (
              <SearchCard
                description={item.snippet.description}
                title={item.snippet.title}
                image={item.snippet.thumbnails.medium.url}
                time={item.snippet.publishTime}
                key={item.etag}
                click={() =>
                  this.handleOpen(item.id.videoId, item.snippet.title)
                }
              />
            ))}
        </div>
        {this.state.modelToggle && (
          <VideoPlayer click={this.handleClose} videoID={this.state.video} />
        )}
      </div>
    );
  }
}
export default SearchComponents;

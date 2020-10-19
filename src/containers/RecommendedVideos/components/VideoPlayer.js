import React, { Component } from "react";

import { Modal } from "antd";

class VideoPlayer extends Component {
  render() {
    const {
      videoID: { videoID, videoTitle },
    } = this.props;
    return (
      <div>
        <Modal
          title={videoTitle}
          visible
          onCancel={this.props.click}
          footer={null}
          width={1000}
        >
          <div className="embed-container">
            <iframe
              src={`https://www.youtube.com/embed/${videoID}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      </div>
    );
  }
}

export default VideoPlayer;

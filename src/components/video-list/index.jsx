import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

import VideoListItem from '../video-list-item/index.jsx';

class VideoList extends Component {
  onItemClick(video) {
    this.props.onClickVideo(video);
  }

  generateVideoItem(video) {
    return <VideoListItem key={video.etag} video={video} onClickEvent={value => this.onItemClick(value)}></VideoListItem>;
  }

  videoItems() {
    return this.props.videos.map(video => this.generateVideoItem(video));
  }

  render() {
    return (
      <div className="video-list">
        <ListGroup>
          {this.videoItems()}
        </ListGroup>
      </div>
    );
  }
}

export default VideoList;

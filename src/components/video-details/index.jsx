import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class VideoDetails extends Component {
  getDetail() {
    const video = this.props.video || null;
    if (video) {
      return (
        <Row>
          <Col xs={12}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
            </div>
          </Col>
          <Col xs={12}>
            <h2>{video.snippet.title}</h2>
          </Col>
          <Col xs={12}>
            {video.snippet.description}
          </Col>
        </Row>
      );
    }
    return <div></div>;
  }

  render() {
    return this.getDetail();
  }
}

export default VideoDetails;

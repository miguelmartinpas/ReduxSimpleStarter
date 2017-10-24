import React, { Component } from 'react';
import { ListGroupItem, Row, Col, Image } from 'react-bootstrap';

class VideoListItem extends Component {
  constructor(props) {
    super(props);

    this.video = this.props.video;
    this.title = this.video.snippet.title || this.withoutTitle;
    this.imageUrl = this.video.snippet.thumbnails.default.url || this.brokeImage;
  }

  get withoutTitle() {
    return 'No title available';
  }

  get brokeImage() {
    return 'https://pbs.twimg.com/media/B9mGvoIIMAEbl_t.png';
  }

  render() {
    return (
      <div className="video-list-item">
          <ListGroupItem onClick={() => this.props.onClickEvent(this.video)} inline>
            <Row>
              <Col xs={4}>
                <Image src={this.imageUrl} responsive />
              </Col>
              <Col xs={8}>
                {this.title}
              </Col>
            </Row>
          </ListGroupItem>
      </div>
    );
  }
}

export default VideoListItem;

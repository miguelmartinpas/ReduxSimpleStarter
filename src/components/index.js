import React, { Component } from 'react';
import { PanelGroup, Panel, Row, Col } from 'react-bootstrap';
import YoutubeSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './search-bar/index.jsx';
import VideoList from './video-list/index.jsx';
import VideoDetails from './video-details/index.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }

  get apiKey() {
    return 'AIzaSyCWPzjRTe7tSMYbxWl2rmUc9lnRaZShzSU';
  }

  youtubeAPIRequest(value) {
    YoutubeSearch({ key: this.apiKey, term: value }, videos => this.youtubeAPIResponse(videos));
  }

  youtubeAPIResponse(videos) {
    this.setState({ ...this.state, videos, selectedVideo: videos[0] });
  }

  handlerSearchValue(value) {
    this.youtubeAPIRequest(value);
  }

  handlerSelectedVideo(video) {
    this.setState({ ...this.state, selectedVideo: video });
  }

  render() {
    return (
      <div className="video-app">
        <PanelGroup>
          <Panel>
            <SearchBar onChange={_.debounce(value => this.handlerSearchValue(value), 300)}></SearchBar>
          </Panel>
          <Panel>
            <Row>
              <Col xs={8}>
                <VideoDetails video={this.state.selectedVideo}></VideoDetails>
              </Col>
              <Col xs={4}>
                <VideoList videos={this.state.videos} onClickVideo={video => this.handlerSelectedVideo(video)}></VideoList>
              </Col>
            </Row>
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SearchBar from './search-bar';

const API_KEY = 'AIzaSyCWPzjRTe7tSMYbxWl2rmUc9lnRaZShzSU';

class App extends Component {
  constructor() {
    super();
    this.message = 'React simple starter';
    this.searchValue = 'Miguelito';
  }

  handlerSearchValue(value) {
    console.log('handlerSearchValue', value);
  }

  render() {
    return (
      <div className="video-app">
        <SearchBar value={this.searchValue} onChange={this.handlerSearchValue}></SearchBar>
      </div>
    );
  }
}

export default App;

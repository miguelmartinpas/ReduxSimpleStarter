import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap';

class SearchBar extends Component {
  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <div className="search-bar">
        <FormGroup>
          <Row>
            <Col xs={12}>
              <FormControl ref="search" type="text" placeholder="Search"
                onChange={event => this.handleChange(event.target.value)}/
              >
            </Col>
          </Row>
        </FormGroup>
      </div>
    );
  }
}

export default SearchBar;

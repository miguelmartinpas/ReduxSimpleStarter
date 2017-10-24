import React, { Component } from 'react';
import { Button, Form, Col, FormGroup, FormControl } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value || '' };
  }

  handleChange(event) {
    this.setState({ value: event.target ? event.target.value : '' });
  }

  handleClick() {
    this.props.onChange(this.state.value);
  }

  render() {
    return (
      <div className="search-bar">
        <Form>
          <FormGroup>
            <Col xs={10}>
              <FormControl ref="search" type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange.bind(this)}/>
            </Col>
            <Col xs={2}>
              <Button onClick={this.handleClick.bind(this)}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SearchBar;

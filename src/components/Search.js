import React, { Component } from 'react';
// import axios from 'axios';
// import { Card } from 'react-bootstrap';
export default class Search extends Component {
  render() {
    // console.log(this.state.abilities);
    return (
      <div>
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            // onChange={this.handleOnInputChange}
            onKeyUp={event => this.props.onTextChange(event.target.value)}
          />
          <i className="fa fa-search search-icon" />
        </label>
      </div>
    );
  }
}

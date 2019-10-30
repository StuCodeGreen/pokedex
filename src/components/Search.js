import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
        <label className="search-label ml-3" htmlFor="search-input">
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            onChange={event => this.props.onTextChange(event.target.value)}
          />
          <i className="fa fa-search search-icon" />
        </label>
      </div>
    );
  }
}

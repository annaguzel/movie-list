import React, { Component } from "react";

class SearchBar extends Component {
  state = { query: "" };

  handleChange = event => {
    this.setState({ query: event.target.value });
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
          
        <h4>Search:</h4>
          <input
            type="text"
            onChange={this.handleChange}
          />

    </div>
    );
  }
}

export default SearchBar;
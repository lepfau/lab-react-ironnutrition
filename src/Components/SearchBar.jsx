import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.searchValue);
    this.setState({
      searchValue: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ width: '70%' }}>
          <input
            style={{ width: '70%' }}
            type="search"
            onChange={this.handleChange}
            value={this.state.searchValue}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;

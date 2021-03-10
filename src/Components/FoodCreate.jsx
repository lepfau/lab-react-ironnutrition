import React, { Component } from 'react';

export class FoodCreate extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '60%',
          height: '100px',
          marginTop: '30px',
        }}
      >
        <input
          placeholder="name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <input
          type="number"
          placeholder="calories"
          name="calories"
          value={this.state.calories}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          placeholder="image url"
          name="image"
          value={this.state.image}
          onChange={this.handleChange}
        ></input>
        <button style={{ height: '30px' }} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default FoodCreate;

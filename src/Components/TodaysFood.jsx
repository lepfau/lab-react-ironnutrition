import React, { Component } from 'react';

export class TodaysFood extends Component {
  render() {
    return (
      <div>
        <h1>Todays food</h1>
        {this.props.todaysfood.map((food) => {
          return <p>{food.name}</p>;
        })}
      </div>
    );
  }
}

export default TodaysFood;

import React, { Component } from 'react';
import foods from '../foods.json';
import Foodbox from './FoodBox';
import FoodCreate from './FoodCreate';

class FoodList extends Component {
  state = {
    showForm: false,
    foodlist: foods,
  };

  addItem = (item) => {
    this.setState({
      foodlist: [item, ...this.state.foodlist],
      showForm: false,
    });
  };

  handleClick = () => {
    console.log('click');
    !this.state.showForm
      ? this.setState({ showForm: true })
      : this.setState({ showForm: false });
  };

  render() {
    return (
      <div>
        <h1>Food App</h1>
        <button onClick={this.handleClick}>Add Food</button>
        {this.state.showForm && <FoodCreate addItem={this.addItem} />}
        {this.state.foodlist.map((food) => {
          return (
            <Foodbox
              name={food.name}
              image={food.image}
              calories={food.calories}
            />
          );
        })}
      </div>
    );
  }
}

export default FoodList;

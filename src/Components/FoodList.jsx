import React, { Component } from 'react';
import foods from '../foods.json';
import Foodbox from './FoodBox';
import FoodCreate from './FoodCreate';
import SearchBar from './SearchBar';
import TodaysFood from './TodaysFood';

class FoodList extends Component {
  state = {
    showForm: false,
    foodlist: foods,
    todaysfood: [],
  };

  addItem = (item) => {
    this.setState({
      foodlist: [item, ...this.state.foodlist],
      showForm: false,
    });
  };

  handleAdd = (props) => {
    let temp = [...this.state.todaysfood];
    temp.push(props);
    this.setState({
      todaysfood: temp,
    });
  };

  handleSearch = (searchvalue) => {
    if (searchvalue) {
      let searched = [...this.state.foodlist];
      const filteredFood = searched.filter((food) => {
        return food.name.toLowerCase().includes(searchvalue.toLowerCase());
      });
      this.setState({
        foodlist: filteredFood,
      });
    } else {
      this.setState({
        foodlist: foods,
      });
    }
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
        <SearchBar handleSearch={this.handleSearch} />
        <TodaysFood todaysfood={this.state.todaysfood} />
        <button onClick={this.handleClick}>Add Food</button>
        {this.state.showForm && <FoodCreate addItem={this.addItem} />}
        {this.state.foodlist.map((food) => {
          return (
            <Foodbox
              name={food.name}
              image={food.image}
              calories={food.calories}
              handleAdd={this.handleAdd}
            />
          );
        })}
      </div>
    );
  }
}

export default FoodList;

import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

// TODO: merge with ingredients
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const fixedDecimals = (num, len) => {
  const lenVar = Math.pow(10, len);
  return Math.round((num + Number.EPSILON) * lenVar) / lenVar;
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  updateIngredientCount = (type, delta) => {
    const oldCount = this.state.ingredients[type];
    let newCount = oldCount + delta;
    newCount = newCount >= 0 ? newCount : 0;
    const newIngredients = {
      ...this.state.ingredients
    };
    newIngredients[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const updatedIngredientPrice = (newCount - oldCount) * INGREDIENT_PRICES[type];
    const newPrice = fixedDecimals(oldPrice + updatedIngredientPrice, 2);

    this.setState({totalPrice: newPrice, ingredients: newIngredients})
  };

  render() {
    const ingredients = this.state.ingredients;
    const disabledInfo = Object.keys(ingredients).reduce((mem, i) => {
      mem[i] = ingredients[i] <= 0;
      return mem;
    }, {});

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <p>Total: $ {this.state.totalPrice}</p>
        <BuildControls
          ingredientCountUpdated={this.updateIngredientCount}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

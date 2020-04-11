import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients).reduce((sum, i) => sum + ingredients[i], 0);
    this.setState({purchaseable: sum > 0});
  }

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

    this.setState({totalPrice: newPrice, ingredients: newIngredients});
    // If the `updatePurchaseState` method were to rely on `this.state.ingredients`
    //  it may see a non-updated version of those ingredients.
    this.updatePurchaseState(newIngredients);
  };

  /*
    Why it should be an arrow function.
      https://learning.oreilly.com/videos/react-the/9781789132229/9781789132229-video8_20 min 6:00
    This is a handler, triggered by a button. If not an arrow function (but a class method)
      the 'this' will refer to the caller context, which is the button, not the class, and it has no state.
  */
  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    alert('Continue');
  };

  render() {
    const ingredients = this.state.ingredients;
    const disabledInfo = Object.keys(ingredients).reduce((mem, i) => {
      mem[i] = ingredients[i] <= 0;
      return mem;
    }, {});

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientCountUpdated={this.updateIngredientCount}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

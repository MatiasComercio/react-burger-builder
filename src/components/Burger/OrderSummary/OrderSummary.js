import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredients = props.ingredients;
  const ingredientSummary = Object.keys(ingredients).map(i => {
    return (
      <li key={i}>
        <span style={{textTransform: 'capitalize'}}>{i}</span>:
        {ingredients[i]}
      </li>
    )
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: ${props.price}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
};

export default orderSummary;

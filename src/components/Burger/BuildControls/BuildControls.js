import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

// TODO: refactor this to centralize it (merge with the ingredient types)
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>$ {props.price}</strong></p>
    {controls.map(control => {
      return <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientCountUpdated(control.type, 1)}
        removed={() => props.ingredientCountUpdated(control.type, -1)}
        disabled={props.disabled[control.type]}
      />
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}>ORDER NOW</button>
  </div>
);

export default buildControls;

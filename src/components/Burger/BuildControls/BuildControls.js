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
    {controls.map(control => {
      return <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientCountUpdated(control.type, 1)}
        removed={() => props.ingredientCountUpdated(control.type, -1)}
        disabled={props.disabled[control.type]}
      />
    })}
  </div>
);

export default buildControls;

import React, {Component} from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

const breadTop = (
  <div className={classes.BreadTop}>
    <div className={classes.Seeds1}></div>
    <div className={classes.Seeds2}></div>
  </div>
)

const defaultIngredient = className => (
  <div className={classes[className]}></div>
);

const ingredientMapper = {
  'bread-top': breadTop,
  'bread-bottom': defaultIngredient('BreadBottom'),
  'meat': defaultIngredient('Meat'),
  'cheese': defaultIngredient('Cheese'),
  'bacon': defaultIngredient('Bacon'),
  'salad': defaultIngredient('Salad'),
};

class BurgerIngredient extends Component {
  render() {
    const ingredientType = this.props.type;

    const ingredient = ingredientMapper[ingredientType] || null;
    if (!ingredient) {
      console.warn(`Ingredient not found: ${ingredientType}.`)
    }

    return ingredient;
  }
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;

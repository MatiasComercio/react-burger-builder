import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  const ingredients = props.ingredients;

  const ingredientComponents = Object.keys(ingredients).map(ingredient => {
    const ingredientCount = ingredients[ingredient];

    const ingredientComponents = [...Array(ingredientCount)].map((_, i) => {
      return <BurgerIngredient key={ingredient + i} type={ingredient} />
    });

    return ingredientComponents;
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientComponents}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

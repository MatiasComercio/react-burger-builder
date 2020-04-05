import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const i18n = {
  err: {
    noIngredients: {
      msg: {
        en: 'Please start adding ingredients!'
      }
    }
  }
};

const lang = 'en';

const ingredientToComponent = (ingredient, ingredientCount) => {
  const ingredientComponents = [...Array(ingredientCount)]
    .map((_, i) => {
      return <BurgerIngredient key={ingredient + i} type={ingredient} />
    });

  return ingredientComponents;
}

const burger = props => {
  const ingredients = props.ingredients;

  let ingredientComponents = Object.keys(ingredients)
    .map(i => ingredientToComponent(i, ingredients[i]))
    .reduce((mem, el) => mem.concat(el), []);

  if (ingredientComponents.length === 0) {
    ingredientComponents = <p>{i18n.err.noIngredients.msg[lang]}</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientComponents}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

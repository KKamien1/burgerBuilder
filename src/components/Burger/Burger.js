import React from "react";

import classes from "./Burger.css";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";

const Burger = props => {
  console.log(Object.keys(props.ingredients));
  console.log([...Array(props.ingredients["meat"])]);

  let transformedIngrediens = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngridient key={igKey + i} type={igKey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log(transformedIngrediens);
  console.log(transformedIngrediens.length === 0);

  if (transformedIngrediens.length === 0) {
    transformedIngrediens = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformedIngrediens}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default Burger;

import React from "react";

import classes from "./BurgerControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = controls.map(ctrl => (
  <BuildControl key={ctrl.label} label={ctrl.label} />
));

const BurgerControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
      />
    ))}
  </div>
);

export default BurgerControls;

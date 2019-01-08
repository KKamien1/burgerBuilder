import React from "react";

import { Aux } from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const description = Object.keys(props.ingredients).map(el => {
    return (
      <li key={el}>
        <span style={{ textTransform: "capitalize" }}>{el}</span>
        {props.ingredients[el]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A burger description:</p>
      <ul>{description}</ul>
      <p>
        Total price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;

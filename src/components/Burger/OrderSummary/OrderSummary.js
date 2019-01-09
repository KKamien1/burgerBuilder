import React, { Component } from "react";

import { Aux } from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate = () => {};

  render() {
    const description = Object.keys(this.props.ingredients).map(el => {
      return (
        <li key={el}>
          <span style={{ textTransform: "capitalize" }}>{el}</span>
          {this.props.ingredients[el]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A burger description:</p>
        <ul>{description}</ul>
        <p>
          Total price: <strong>{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;

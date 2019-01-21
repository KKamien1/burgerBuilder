import React, { Component } from "react";
import classes from "./Checkout.css";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "../Checkout/ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingrediens: null,
    totalPrice: 0
  };

  componentWillMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    const ingrediens = {};
    let price = 0;
    for (let param of query.entries()) {
      // ['salad', '1']
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingrediens[param[0]] = +param[1];
      }
    }
    this.setState({ ingrediens, totalPrice: price });
  };

  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinue = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingrediens}
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinue={this.checkoutContinue}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={props => (
            <ContactData
              ingredients={this.state.ingrediens}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;

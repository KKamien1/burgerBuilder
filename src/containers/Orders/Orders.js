import React, { Component } from "react";
import axios from "../../axios-orders";
import Order from "./Order/Order";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import classes from "./Orders.css";

class Orders extends Component {
  state = {
    loading: true,
    orders: []
  };

  componentDidMount = () => {
    axios
      .get("/orders.json")
      .then(response => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }

        this.setState({ orders: fetchedOrders, loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div className={classes.Orders}>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);

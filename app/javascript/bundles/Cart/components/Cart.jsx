import React, { Component } from 'react';
import Products from './Products'
import Summary from './Summary'

class Cart extends Component {
  state = {
    cartItems: this.props.cartItems,
    subtotal: 0,
  }

  componentDidMount() {
    let subtotal = 0
    this.state.cartItems.forEach(p => (subtotal += p.price) )
    this.setState({ subtotal })
  }

  render() {
    return (
      <div>
        <Products items={this.state.cartItems}/>
        <Summary summary={this.state.subtotal}/>
      </div>
    );
  }
}

export default Cart;

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
    this.state.cartItems.forEach(p => (subtotal += p.price / 100) )
    this.setState({ subtotal })
  }

  render() {
    return (
      <>
        <div id="cart-header">
          <h1>Ready to check out?</h1>
        </div>
        <div id="cart-container" >
          <Products items={this.state.cartItems}/>
          <Summary summary={this.state.subtotal}/>
        </div>
      </>
    );
  }
}

export default Cart;
import React, { Component } from 'react';
import Products from './Products'
import Summary from './Summary'

class Cart extends Component {
  state = {
    cartItems: this.props.cartItems,
    subtotal: 0,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
}

  componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
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

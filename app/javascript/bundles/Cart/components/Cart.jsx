import React, { Component } from 'react';
import axios from 'axios'
import Products from './Products'
import Summary from './Summary'

const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

export const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': token
};

class Cart extends Component {
  state = {
    cartItems: this.props.cartItems,
    subtotal: 0,
    refetch: false
  }

  componentDidMount() {
    let subtotal = 0
    this.state.cartItems.forEach(p => (subtotal += p.price / 100) )
    this.setState({ subtotal })
  }

  componentDidUpdate() {
    this.state.refetch && this.fetchData()
  }

  fetchData = async () => {
    const { cartId } = this.props
    const { data } = await axios.get(`/carts/${cartId}/cart_products`)
    console.log('data', data)
    this.setState({ cartItems: data.cartItems, refetch: false })
  }

  handleAmountChange = (id, diff) => async () => {
    const { cartItems } = this.state
    const { cartId } = this.props
    const { amount } = cartItems.find((cartItem => cartItem.id === id)) || {}
    const url = `/carts/${cartId}/cart_products/${id}`
    await axios.patch(url, { amount: amount + diff }, { headers })
    this.setState({ refetch: true })
  } 

  handleDeleteItem = id => async () => {
    await axios.delete(`/carts/${this.props.cartId}/cart_products/${id}`, { headers })
    this.setState({ refetch: true })
  }
  
  render() {
    return (
      <>
        <div id="cart-header">
          { this.state.cartItems ? "Ready to check out?" : "No items selected" }
          
        </div>
        <div id="cart-container" >
          <Products items={this.state.cartItems} handleAmountChange={this.handleAmountChange} handleDeleteItem={this.handleDeleteItem} />
          <Summary summary={this.state.subtotal}/>
        </div>
      </>
    );
  }
}

export default Cart;



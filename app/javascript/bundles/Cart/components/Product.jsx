import React, { Component } from 'react';
import '../../../../assets/stylesheets/products.css';

class Product extends Component {
  state = {
    product: { images:[] },
    amount: this.props.item.amount,
    price: this.props.item.price
  }

  componentDidMount(){
    const { item } = this.props
    const url = `/${item.sellableType.toLowerCase()}s/${item.sellableId}.json`
    fetch(url)
      .then(res=>res.json())
      .then(product => this.setState({ product }))
  }

  render(){
    const { product, price } = this.state
    return (
      <li className="product-container">
        {
          product.images.map ((image, i) => {
            return <img src={image} alt="product" key={i}/>
          })
        }
        <div className="product-details">
          <div className="product-left">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button type="submit">+</button>
          </div>
          <div className="product-right">
            <p>{(price / 100).toFixed(2)}</p>
            <button type="submit">d</button>
          </div>
        </div>
      </li>
    )
  }
}

export default Product;

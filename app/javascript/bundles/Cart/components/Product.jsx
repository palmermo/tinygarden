import React, { Component } from 'react';

class Product extends Component {
  state = {
    product: { images:[] },
    amount: this.props.item.amount
  }

  componentDidMount(){
    const { item } = this.props
    const url = `/${item.sellableType.toLowerCase()}s/${item.sellableId}.json`
    fetch(url)
      .then(res=>res.json())
      .then(product => this.setState({ product }))
  }

  render(){
    const { product } = this.state
    return (
      <li className="product-container">
        {
          product.images.map ((image, i) => {
            return <img src={image} alt="product" key={i}/>
          })
        }
        <div className="product-details">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </li>
    )
  }
}

export default Product;

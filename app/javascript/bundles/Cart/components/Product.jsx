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
      <li>
        <h2>{product.name}</h2>
        {
          product.images.map ((image, i) => {
            return <img src={image} alt="wtf" key={i}/>
          })
        }
        <p>{product.description}</p>
      </li>
    )
  }
}

export default Product;

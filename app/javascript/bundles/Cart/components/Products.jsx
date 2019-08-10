import React, { Component } from 'react';
import Product from './Product'

const Products = props => {
  return (
    <ul>
      {
        props.items.map(item => {
          return <Product key={item.sku} item={item} />
        })
      }
    </ul>
  )
}

export default Products;

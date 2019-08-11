import React, { Component } from 'react';
import Product from './Product'

const Products = props => {
  return (
    <>
      <ul id="products-container">
        {
          props.items.map((item, i) => {
            return (
              <div key={item.id}>
                <Product key={item.sku} item={item} /> 
                <hr key={i}/>
              </div>
            )
          })
        }
      </ul>
    </>
  )
}

export default Products;

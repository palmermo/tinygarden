import React, { Component } from 'react';
import Product from './Product'

const Products = props => {
  return (
    <>
      <ul id="products-container">
        {
          props.items.map((item) => {
            return (
              <div key={item.id}>
                <Product item={item} /> 
                <hr/>
              </div>
            )
          })
        }
      </ul>
    </>
  )
}

export default Products;

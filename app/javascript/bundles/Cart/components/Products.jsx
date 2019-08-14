import React, { Component } from 'react';
import Product from './Product'

const Products = props => {
  console.log(props)
  console.log(props.items)
  return (
    <>
      <ul id="products-container">
        {
          props.items.map((item) => {
            console.log(item)
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

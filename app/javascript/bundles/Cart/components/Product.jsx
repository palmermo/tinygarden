import React, { Component } from 'react';

const Product = props => {
  return (
    <li>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </li>
  )
}

export default Product;

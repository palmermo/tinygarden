import React, { Component } from 'react';

const Summary = props => {
  return (
    <section>
      <h1>Summary</h1>
      <div>Subtotal <span>{props.summary}</span></div>
    </section>
  )
}

export default Summary;

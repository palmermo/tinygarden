import React from 'react'

const FeaturedProducts = ({ plants = [] }) => (
  <div className="shopfeatprod">
    {
      plants.map((plant, i) => (
      <article className="cards" key={i}>
        <div className="hvrbox hvrbox-width">
          <img src="http://www.placepuppy.net/200/200" alt="${plant.name}" key={i}/>
          <div className="space-between">
          <h5 className="left">{plant.name}</h5>
            <h6 className="right">{plant.price}</h6>
            </div>
          <div className="hvrbox-layer_top">
          <div className="hvrbox-text">
            <h3>{plant.name}</h3>
            <h4>{plant.size}</h4>
            Lorem ipsum dolor sit assssssssssssssssss jndwkfjnwe jidbnfij he ehv wefhj vejfh vjer fwvij rfljv elifkjvnlkjuse fv werij vijmet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.<br/>>-- Click to see more --
            </div>
          </div>
        </div>
        <button className ="btn-round red filter-red-bttn">
        Add to Cart
        </button>
      </article>
      ))
    }
  </div>
)




export default FeaturedProducts

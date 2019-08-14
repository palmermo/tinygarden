import React from 'react'

const PlantList = ({ plants = [] }) => (
  <div className="shopfeatprod plantlist-wrapper">
    {
      plants.map((plant, i) => (
      <article className="cards cards-filter" key={i}>
        <div className="hvrbox hvrbox-width">
          <img className="plant-filter-image" src="http://www.placepuppy.net/200/200" alt="${plant.name}" key={i}/>
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

//         <table>
//     <thead>
//     <tr>
//         <th>Name</th>
//         <th>Light</th>
//         <th>Care</th>
//         <th colSpan="3"></th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//         plants.map(plant => (
//         <tr key={plant.name}>
//           <td>{plant.name}</td>
//           <td>{plant.light}</td>
//           <td>{plant.maintenance}</td>
//         </tr>
//         ))
//       }
//     </tbody>
//   </table>
// 



export default PlantList

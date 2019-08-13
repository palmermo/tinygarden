import React from 'react'

const PlantList = ({ plants = [] }) => (
  <div class="shopfeatprod">
    {
      plants.map((plant, i) => (
      <article class="cards">
        <div class="hvrbox">
        <img src={plant.img} alt="product" key={i}/>
          <div class="space-between">
          <h3 class="left">{plant.name}</h3>
            <h3 class="right">$24</h3>
            </div>
          <div class="hvrbox-layer_top">
          <div class="hvrbox-text">
            <h3>{plant.name}</h3>
            <h4>{"#{plant.size}"}</h4>
            Lorem ipsum dolor sit assssssssssssssssss jndwkfjnwe jidbnfij he ehv wefhj vejfh vjer fwvij rfljv elifkjvnlkjuse fv werij vijmet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.<br/>>-- Click to see more --
            </div>
          </div>
        </div>
        <button class ="btn-round red">
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

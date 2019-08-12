import React from 'react'

const PlantList = ({ plants = [] }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Light</th>
        <th>Care</th>
        <th colSpan="3"></th>
      </tr>
    </thead>
    <tbody>
      {
        plants.map(plant => (
        <tr key={plant.name}>
          <td>{plant.name}</td>
          <td>{plant.light}</td>
          <td>{plant.maintenance}</td>
        </tr>
        ))
      }
    </tbody>
  </table>
)


export default PlantList

import React, { Component } from 'react';
import axios from 'axios';
import PlantList from './PlantList'
import Filter from './Filter'
import { filters } from './utils'

class Plants extends Component {
  state = { plants: [], filters: { size: [], light: [], maintenance: [], category: [] } }
  componentDidMount() {
    this.fetchPlants()
  }

  fetchPlants = () => {
    const { filters } = this.state;
    const currentFilters = Object.keys(this.state.filters)
    const activeFilters = currentFilters.filter(filter => filters[filter].length)
    const searchParams = activeFilters.length && activeFilters.reduce((acc, filter) => {
      const filterParams = `${filter}=${filters[filter].join(',')}`
      if (acc) return acc + '&' + filterParams
        return filterParams
    }, "") 
    const url = searchParams ? `/plants.json?${searchParams}` : '/plants.json'
    console.log('URL', url)
    axios.get(url)
    .then(response => this.setState({ plants: response.data.plants }))
  }

  handleFilter = (type, value) => {
    const filters = this.state.filters[type]
    const updatedFilter = filters.includes(value) 
      ? filters.filter(currentFilter => currentFilter !== value)
      : [...filters, value]
    this.setState({ filters: { ...this.state.filters, [type]: updatedFilter }}, this.fetchPlants)
  }

  render() {
    const { plants } = this.state;
    return (
      <div>
        {
        filters.map(filter => <Filter {...filter} handleClick={this.handleFilter}/>)
        }
        <PlantList plants={plants}/>
      </div>
    )
  }
}

export default Plants;

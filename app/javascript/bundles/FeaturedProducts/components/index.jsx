import React, { Component } from 'react'
import axios from 'axios'
import FeaturedProducts from 'FeaturedProducts'

class FeaturedList extends Component {
  state = { plants: [].sort, 
  filters: { size: [], light: [], maintenance: [], category: [] }, 
  }

  componentDidMount() {
    this.fetchPlants()
  }

  fetchPlants = () => {
  const { filters } = this.state;
  const searchParams = ['size', 'light', 'maintenance', 'category'].reduce((acc, filterType) => {
    const filter = filters[filterType] || [];
    if (!filter.length) return acc;
    const filterParams = `${filterType}=${filter.join(',')}`;
    return acc ? `${acc}&${filterParams}` : filterParams;
  }, '');
  const url = searchParams ? `/plants.json?${searchParams}` : '/plants.json';
  axios.get(url).then(({ data }) => this.setState({ plants: data.plants }));
  };

  render() {
    const { plants } = this.state;
    return (
      <div className="plants-list">
        <FeaturedProducts plants={plants}/>
      </div>
    )
  }
}

export default FeaturedList;

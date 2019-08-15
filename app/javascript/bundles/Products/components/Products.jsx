import React from 'react';
import PlantList from '../../Plants/components/PlantList'
import AccessoryList from '../../AccessoryList/components/AccessoryList'

span = {
  cursor: 'pointer'
}

export class Products extends Component {
  state = {
    visible: 'Plants',
  }

  handleClick = e => {
    this.setState({visible: e.target.innerText})
  }

  render() {
    return (
      <div>
        <header>
          <h1 class="product-filter-header">
            <span onClick={this.handleClick} style={span}>
              Plants
            </span>
            |
            <span onClick={this.handleClick} style={span}>
              Accessories
            </span>
          </h1>

        </header>
        {
          this.state.visible === 'Plant' ? <PlantList /> : <AccessoryList />
        }
      </div>
    );
  }
}

export default Products;

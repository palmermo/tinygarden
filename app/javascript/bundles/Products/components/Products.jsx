import React, {Component} from 'react';
import Plants from '../../Plants/components/Plants'
import Accessories from '../../Accessories/components/Accessories'

const span = {
  cursor: 'pointer',
  marginLeft: '2rem'
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
          <h1 className="product-filter-header" style={ {textAlign: 'center'} }>
            <span onClick={this.handleClick} style={span}>
              Plants
            </span>
            <span onClick={this.handleClick} style={span}>
              Accessories
            </span>
          </h1>

        </header>
        {
          this.state.visible === 'Plants' ? <Plants /> : <Accessories />
        }
      </div>
    );
  }
}

export default Products;

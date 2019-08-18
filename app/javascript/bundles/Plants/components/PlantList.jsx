import React, { Component } from 'react';
import Modal from './Modal';

class PlantList extends Component {
  state = {
    modalOpen: false,
    plant: {}
  }
  
  handleClick = plant => {
    this.setState({ plant, modalOpen: true })
  }

  addClick = plant => {
    console.log("plant",plant)
  }

  toggleModal = _ => this.setState(prevState => ({ modalOpen: !prevState.modalOpen }));
  
  render() {
    const { modalOpen, plant } = this.state;
    return(
      <div className="shopfeatprod plantlist-wrapper">
        {
          this.props.plants.map((plant, i) => (
            <article onClick={() => this.handleClick(plant)} className="cards cards-filter" key={i}>
              <div className="hvrbox hvrbox-width">
                <img className="plant-filter-image" src={plant.url} alt="${plant.name}" key={i}/>
                <div className="space-between">
                  <h5 className="left">{plant.name}</h5>
                  <h6 className="right">{plant.price}</h6>
                </div>
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text">
                    <h3>{plant.name}</h3>
                    <h4>{plant.size}</h4>
                      <p>{plant.description}</p><br/>-- Click to see more --
                  </div>
                </div>
              </div>
              <button className ="btn-round red filter-red-bttn" onClick={() => this.addClick(plant)}>
                Add to Cart
              </button>
            </article>
          ))
        }
        <Modal
          isOpen={modalOpen}
          modalContent={plant}
          actions={[{ label: 'Close', onClick: this.toggleModal }]}
        />
      </div>
    )
  }
}

export default PlantList

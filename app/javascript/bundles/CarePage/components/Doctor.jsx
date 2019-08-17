import React, { Component } from 'react';

const Doctor = () => {
  return (
    <>
      {/* <div className="doctor-wrapper">
        <div className="doctor-question"> What if my plant looks like this? </div>
        <div className="box-container-1">
          
          <div id="box-1" className="box">
            <div className="ailment"> Yellow pale leaves </div>
          </div>
          
          <div id="box-2" className="box">
            <div className="ailment">  Soft pliable leaves, green but droopy </div>
          </div>
         
          <div id="box-3" className="box">
            <div className="ailment"> Brown leaf tips and edges </div>
          </div>
       
        </div>

        <div className="box-container-2">

          <div id="box-4" className="box">
            <div className="ailment"> black spots or holes </div>
          </div>

          <div id="box-5" className="box">
            <div className="ailment">  Growing toward light </div>
          </div>

          <div id="box-6" className="box">
            <div className="ailment"> Brown streaks and looser leaves </div>
          </div>

        </div>

      </div> */}
       <div className="doctor-question"> What if my plant looks like this? </div>
      <div class="plant-doc-grid-container">
        <div id="plant-box-1" class="pd-grid-item">Yellow Pale Leaves</div>
        <div id="plant-box-2"class="pd-grid-item"> Soft pliable leaves, green but droopy </div>
        <div id="plant-box-3" class="pd-grid-item"> Brown leaf tips and edges </div>  
        <div id="plant-box-4" class="pd-grid-item"> Growing Toward Light</div>
        <div id="plant-box-5" class="pd-grid-item"> Black Spots or Holes </div>
        <div id="plant-box-6" class="pd-grid-item"> Brown streaks and looser leaves </div>   
      </div>


    </>
  )
}

export default Doctor;

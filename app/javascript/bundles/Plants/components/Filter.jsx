import React from 'react';

const Filter = ({ filterType, filterParams = [], handleClick }) => (
  <div className="filter-product-box" >
    <div className="filter-header">
      <h4>{filterType}</h4>
    </div>
    {filterParams.map(({ value, label }) => (
      <React.Fragment className="check-styles" key={label}>
        <div className="check-alignment">
          <input type="checkbox" value={value} onClick={() => handleClick(filterType, value)} />
          <label for="exampleRadios1">
            {label}
          </label>
        </div>
        {/* <label>{label}</label>
        <input type="checkbox" value={value} onClick={() => handleClick(filterType, value)} /> */}
      </React.Fragment>
    ))}
  </div>
)

export default Filter;

// <div class="form-check">
//   <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
//   <label class="form-check-label" for="exampleRadios1">
//     Default radio
//   </label>
// </div>
// <div class="form-check">
//   <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
//   <label class="form-check-label" for="exampleRadios2">
//     Second default radio
//   </label>
// </div>
// <div class="form-check disabled">
//   <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
//   <label class="form-check-label" for="exampleRadios3">
//     Disabled radio
//   </label>
// </div>

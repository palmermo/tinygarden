import React from 'react';

const Filter = ({ filterType, filterParams = [], handleClick }) => (
  <div>
    <h1>{filterType}</h1>
    {filterParams.map(({ value, label }) => (
      <React.Fragment key={label}>
        <label>{label}</label>
        <input type="checkbox" value={value} onClick={() => handleClick(filterType, value)} />
      </React.Fragment>
    ))}
  </div>
)

export default Filter;

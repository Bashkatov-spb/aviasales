import React from 'react';

const Filter = ({ name }) => {
  return (
    <label className="filters__check">
      <input className="filters__input" type="checkbox" />
      <span className="filters__checkbox"></span>
      {name}
    </label>
  );
};

export default Filter;

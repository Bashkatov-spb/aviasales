import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';

const Filter = ({ name, value, check, unCheck, state }) => {
  const { filtersValue } = state.filtersInfo;
  let isChecked = filtersValue.includes(value.toString());
  if (value === 4 && filtersValue.length !== 5) {
    isChecked = false;
  }
  return (
    <label className="filters__check">
      <input
        onChange={(e) => (e.target.checked ? check(e) : unCheck(e))}
        name={value}
        checked={isChecked}
        className="filters__input"
        type="checkbox"
      />
      <span className="filters__checkbox"></span>
      {name}
    </label>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(Filter);

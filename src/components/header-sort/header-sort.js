import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';

const HeaderSort = ({ tab, state }) => {
  const { classActive } = state.filtersInfo;
  return (
    <div className="items__header">
      <button
        onClick={(e) => tab(e.target.name)}
        name="cheap"
        className={`items__header-cheapest ${classActive === 'cheap' && 'active'}`}
      >
        самый дешевый
      </button>
      <button
        onClick={(e) => tab(e.target.name)}
        name="fast"
        className={`items__header-fastest ${classActive === 'fast' && 'active'}`}
      >
        самый быстрый
      </button>
      <button
        onClick={(e) => tab(e.target.name)}
        name="optimal"
        className={`items__header-optimal ${classActive === 'optimal' && 'active'}`}
      >
        оптимальный
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(HeaderSort);

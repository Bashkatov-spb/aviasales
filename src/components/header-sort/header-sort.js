import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const HeaderSort = ({ active, tab }) => {
  return (
    <div className="items__header">
      <button onClick={(e) => tab(e.target.name)} name="cheap" className={`items__header-cheapest ${active.classActive === 'cheap' && 'active'}`}>самый дешевый</button>
      <button onClick={(e) => tab(e.target.name)} name="fast" className={`items__header-fastest ${active.classActive === 'fast' && 'active'}`}>самый быстрый</button>
      <button onClick={(e) => tab(e.target.name)} name="optimal" className={`items__header-optimal ${active.classActive === 'optimal' && 'active'}`}>оптимальный</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    active: state
  }
}

export default connect(mapStateToProps, actions)(HeaderSort);
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Filters = ({active, all, not, ont, twt, trt, unAll, unOne, unTwo, unTrt}) => {
  return (
    <div className="filters">
      <div className="filters__header">количество пересадок</div>
      <div className="filters__list">
        <label className="filters__check">
          <input className="filters__input" onChange={(e) => e.target.checked ? all() : unAll()} type="checkbox" checked={active.all} />
          <span className="filters__checkbox"></span>
          Все 
        </label>
        <label className="filters__check">
          <input className="filters__input" onChange={(e) => e.target.checked ? not() : unAll()} value="All" type="checkbox" checked={active.not}/>
          <span className="filters__checkbox"></span>
          Без пересадок 
        </label>
        <label className="filters__check">
          <input className="filters__input" onChange={(e) => e.target.checked ? ont() : unOne()} value="All" type="checkbox" checked={active.one}/>
          <span className="filters__checkbox"></span>
          1 пересадка 
        </label>
        <label className="filters__check">
          <input className="filters__input" onChange={(e) => e.target.checked ? twt() : unTwo()} value="All" type="checkbox" checked={active.two}/>
          <span className="filters__checkbox"></span>
          2 пересадки 
        </label>
        <label className="filters__check">
          <input className="filters__input" onChange={(e) => e.target.checked ? trt() : unTrt()} value="All" type="checkbox" checked={active.three}/>
          <span className="filters__checkbox"></span>
          3 пересадки 
        </label>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    active: state
  }
}

export default connect(mapStateToProps, actions)(Filters);
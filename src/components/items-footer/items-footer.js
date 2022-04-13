import React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const ItemsFooter = ( {addT} ) => {

  return (
    <div className="items__footer">
      <button onClick={() => addT()} className="items__footer-showmore">показать ещё 5 билетов!</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(ItemsFooter);
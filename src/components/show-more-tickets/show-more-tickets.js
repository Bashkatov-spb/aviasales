import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';

const ShowMoreTickets = ({ showMoreTickets }) => {
  return (
    <div className="items__footer">
      <button onClick={showMoreTickets} className="items__footer-showmore">
        показать ещё 5 билетов!
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(ShowMoreTickets);

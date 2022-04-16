import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Filters from '../filters/filters';
import HeaderLogo from '../header-logo/header-logo';
import HeaderSort from '../header-sort/header-sort';
import ShowMoreTickets from '../show-more-tickets/show-more-tickets';
import ItemsList from '../items-list/items-list';
import * as actions from '../../redux/actions';
import './app.scss';
import Spinner from '../spinner/spinner';

const App = ({ addDataTickets, state }) => {
  const { filtersInfo, showDataInfo } = state;
  const { data } = showDataInfo;
  const { filtersValue } = filtersInfo;
  const [searchId, setSearchId] = useState();
  const [stop, setStop] = useState(false);
  let showErrorMessage = false;
  if (filtersValue.length <= 0) {
    showErrorMessage = true;
  }
  useEffect(() => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((id) => setSearchId(id.searchId))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (searchId && !stop) {
      const getData = async () => {
        let response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
        if (response.status === 502 || response.status === 500) {
          await getData();
        } else if (response.status === 404) {
          console.error(response.statusText);
        } else if (response.status !== 200) {
          console.error(response.statusText);
          await new Promise((resolve) => setTimeout(resolve, 1500));
          await getData();
        } else {
          let body = await response.json();
          addDataTickets([...body.tickets]);
          if (body.stop) {
            setStop(true);
          }
        }
      };
      getData();
    }
  }, [searchId, data]);

  return (
    <div className="container">
      <HeaderLogo />
      <main className="main">
        <Filters />
        <div className="items">
          <HeaderSort />
          {!stop && <Spinner />}
          {!showErrorMessage && <ItemsList />}
          {showErrorMessage && <h2 className="title-error">Рейсов, подходящих под заданные фильтры, не найдено</h2>}
          {!showErrorMessage && <ShowMoreTickets />}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(App);

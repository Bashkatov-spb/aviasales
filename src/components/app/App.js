import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Filters from '../filters/filters';
import HeaderLogo from '../header-logo/header-logo';
import HeaderSort from '../header-sort/header-sort';
import ItemsFooter from '../items-footer/items-footer';
import ItemsList from '../items-list/items-list';
import * as actions from '../../actions';
import './app.scss';
import Spinner from '../spinner/spinner';

const App = ({ data, addData, state }) => {
  const [searchId, setSearchId] = useState();
  const [stop, setStop] = useState(false);
  let showErrorMessage = false;
  if (
    state.all === false &&
    state.not === false &&
    state.one === false &&
    state.two === false &&
    state.three === false
  ) {
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
      async function getData() {
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
          addData([...body.tickets]);
          if (body.stop) {
            setStop(true);
          }
        }
      }
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
          {!showErrorMessage && <ItemsFooter />}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    loading: state.loading,
    state,
  };
};

export default connect(mapStateToProps, actions)(App);

import React from 'react';
import { connect } from 'react-redux';

import Item from '../item/item';
const ItemsList = ({ state }) => {
  const { filtersInfo, showDataInfo } = state;
  const { data, showTickets } = showDataInfo;
  const { filtersValue, classActive } = filtersInfo;
  const sortByPrice = (data) => {
    return data.sort((a, b) => {
      return a.price - b.price;
    });
  };
  const sortByDuration = (data) => {
    return data.sort((a, b) => {
      return a.segments[0].duration - b.segments[0].duration;
    });
  };
  const optimalSort = (data) => {
    return data.sort((a, b) => {
      return a.price + a.segments[0].duration - (b.price + b.segments[0].duration);
    });
  };
  let newArr = [];
  if (filtersValue.length > 0) {
    for (let i = 0; i < filtersValue.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (data[j].segments[0].stops.length === Number(filtersValue[i])) {
          newArr.push(data[j]);
        }
      }
    }
  } else {
    newArr = [];
  }

  let newData = [];
  if (classActive === 'cheap') {
    newData = sortByPrice(newArr);
  }
  if (classActive === 'fast') {
    newData = sortByDuration(newArr);
  }
  if (classActive === 'optimal') {
    newData = optimalSort(newArr);
  }
  if (classActive === '') {
    newData = newArr;
  }

  const items = newData.map((item, index) => {
    if (index < showTickets) {
      return <Item key={index} item={item} />;
    }
  });

  return <div className="items__list">{items}</div>;
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(ItemsList);

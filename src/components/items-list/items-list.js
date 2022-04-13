import React from 'react'
import Item from '../item/item';
import { connect } from 'react-redux';

const ItemsList = ({data, showTickets, state}) => {

  const sortByPrice = (data) => {
    return data.sort((a, b) => {
      return a.price - b.price;
    });
  }
  const sortByDuration = (data) => {
    return data.sort((a, b) => {
      return a.segments[0].duration - b.segments[0].duration;
    });
  }
  const optimalSort = (data) => {
    return data.sort((a, b) => {
      return (a.price + a.segments[0].duration) - (b.price + b.segments[0].duration);
    });
  }
  let newData = [];
  if (state.classActive === 'cheap') {
    newData = sortByPrice(data);
  }
  if (state.classActive === 'fast') {
    newData = sortByDuration(data);
  }
  if (state.classActive === 'optimal') {
    newData = optimalSort(data);
  }
  if (state.classActive === '' || state.all) {
    newData = data;
  }
  if (state.not && !state.all) {
    newData = data.filter((item) => item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0)
  }
  if (state.one) {
    newData = data.filter((item) => item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1)
  }
  if (state.two) {
    newData = data.filter((item) => item.segments[0].stops.length === 2 && item.segments[1].stops.length === 2)
  }
  if (state.three) {
    newData = data.filter((item) => item.segments[0].stops.length === 3 && item.segments[1].stops.length === 3)
  }
  if (state.one && state.two) {
    newData = data.filter((item) => item.segments[0].stops.length <= 2 && item.segments[1].stops.length <= 2)
  }
  if (state.one && state.two && state.three) {
    newData = data.filter((item) => item.segments[0].stops.length <= 3 && item.segments[1].stops.length <= 3)
  }
  const items = newData.map((item, index) => {
    if (index < showTickets) {
      return <Item key={index} item={item}/>
    }
  })
  
  return (
    <div className="items__list">
      {items}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    showTickets: state.showTickets,
    data: state.data,
    state
  }
}

export default connect(mapStateToProps)(ItemsList);
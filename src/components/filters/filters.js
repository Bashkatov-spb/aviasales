import React from 'react';

import Filter from '../filter/filter';

const Filters = () => {
  const filtersNames = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
  const filtersValues = [4, 0, 1, 2, 3];
  const filters = filtersNames.map((item, idx) => {
    return <Filter key={idx} name={item} value={filtersValues[idx]} />;
  });
  return (
    <div className="filters">
      <div className="filters__header">количество пересадок</div>
      <div className="filters__list">{filters}</div>
    </div>
  );
};

export default Filters;

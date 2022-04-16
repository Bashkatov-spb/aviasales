import { combineReducers } from 'redux';

import filtersInfo from './filtersInfo';
import showDataInfo from './showDataInfo';

export default combineReducers({
  filtersInfo,
  showDataInfo,
});

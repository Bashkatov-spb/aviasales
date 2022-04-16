const defaultState = {
  filtersValue: ['1', '2'],
  classActive: '',
};

const filtersInfo = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'CHECK':
      return {
        ...state,
        filtersValue: actions.payload === '4' ? ['0', '1', '2', '3', '4'] : [...state.filtersValue, actions.payload],
      };
    case 'UNCHECK':
      return {
        ...state,
        filtersValue: actions.payload === '4' ? [] : state.filtersValue.filter((item) => item !== actions.payload),
      };
    case 'TAB_ACTIVE':
      return { ...state, classActive: actions.payload };
    default:
      return state;
  }
};

export default filtersInfo;

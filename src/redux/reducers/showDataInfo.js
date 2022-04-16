const defaultState = {
  showTickets: 15,
  data: [],
  loading: true,
};

const showDataInfo = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'ADD_TICKETS':
      return { ...state, showTickets: state.showTickets + 5 };
    case 'ADD_DATA':
      return { ...state, data: [...state.data, ...actions.payload] };
    case 'STOP_LOADING':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default showDataInfo;

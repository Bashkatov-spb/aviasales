const defaultState = {
  all: false,
  not: false,
  one: true,
  two: true,
  three: false,
  classActive: '',
  async: '',
  showTickets: 15,
  data: [],
  loading: true,
}

const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'ALL':
      return {...state, all: true, not: true, one:true, two: true, three: true};
    case 'NO_TRANSFER':
      return {...state, all: false, not: true, one: false, two: false, three: false};
    case 'ONE_TRANSFER':
      return {...state, one: true, not: false};
    case 'TWO_TRANSFER':
      return {...state, two: true, not: false};
    case 'THREE_TRANSFER':
      return {...state, three: true, not: false};
    case 'NO_ONE':
      return {...state, one: false};
    case 'NO_TWO':
      return {...state, two: false};
    case 'NO_THREE':
      return {...state, three: false};
    case 'ASYNC':
      return {...state, async: 'pognali'};
    case 'UNCHECK_ALL':
      return {...state, all: false, not: false, one:false, two: false, three: false};
    case 'TAB_ACTIVE':
      return {...state, classActive: actions.payload};
    case 'ADD_TICKETS':
      return {...state, showTickets: state.showTickets + 5}
    case 'ADD_DATA':
      return {...state, data: [...state.data, ...actions.payload]}
    case 'STOP_LOADING':
      return {...state, loading: false}
    default: 
      return state;
  }
}

export default reducer;
export const check = (e) => ({ type: 'CHECK', payload: e.target.name });
export const unCheck = (e) => ({ type: 'UNCHECK', payload: e.target.name });
export const showMoreTickets = () => ({ type: 'ADD_TICKETS' });
export const setId = (id) => ({ type: 'SET_ID', payload: id });
export const addDataTickets = (data) => ({ type: 'ADD_DATA', payload: data });
export const stopLoading = () => ({ type: 'STOP_LOADING' });
export const tab = (e) => {
  return {
    type: 'TAB_ACTIVE',
    payload: e,
  };
};

export const all = () => ({type: 'ALL'});
export const not = () => ({type: 'NO_TRANSFER'});
export const ont = () => ({type: 'ONE_TRANSFER'});
export const twt = () => ({type: 'TWO_TRANSFER'});
export const trt = () => ({type: 'THREE_TRANSFER'});
export const unOne = () => ({type: 'NO_ONE'});
export const unTwo = () => ({type: 'NO_TWO'});
export const unTrt = () => ({type: 'NO_THREE'});
export const unAll = () => ({type: 'UNCHECK_ALL'});
export const addT = () => ({type: 'ADD_TICKETS'});
export const addData = (data) => ({type: 'ADD_DATA', payload: data});
export const stopLoading = () => ({type: 'STOP_LOADING'})
export const asyncAdd = () => {
  return (dispatch) => {
    setTimeout(() => {
      console.log('async');
    }, 3000)
  }
};
export const tab = (e) => {
  return {
    type: 'TAB_ACTIVE',
    payload: e
  }
};
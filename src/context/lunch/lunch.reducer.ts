import lunchTypes from './lunch.types';

function lunchReducer(state, action) {
  switch (action.type) {
    case lunchTypes.SET_LUNCH:
      return action.payload;
    default:
      return state;
  }
}

export default lunchReducer;

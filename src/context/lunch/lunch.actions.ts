import lunchTypes from './lunch.types';

export function SET_LUNCH(lunch) {
  return {
    type: lunchTypes.SET_LUNCH,
    payload: lunch,
  };
}

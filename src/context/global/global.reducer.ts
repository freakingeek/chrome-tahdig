import types from './global.types';
import { GlobalState } from '../../types/state';

function globalReducer(state: GlobalState, action: { type: string; payload: any }): any {
  switch (action.type) {
    case types.SET_CREDENTIALS:
      return { ...state, credentials: action.payload };
    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    case types.SET_STATUS:
      return { ...state, status: action.payload };
    case types.SET_LUNCH:
      return { ...state, lunch: action.payload };
    default:
      return state;
  }
}

export default globalReducer;

import { Lunch } from '../../types/global';
import types from './global.types';

export function SET_CREDENTIALS(credentials: string) {
  return {
    type: types.SET_CREDENTIALS,
    payload: credentials,
  };
}

export function SET_LOADING(toggle: boolean) {
  return {
    type: types.SET_LOADING,
    payload: toggle,
  };
}

export function SET_STATUS(status: number) {
  return {
    type: types.SET_STATUS,
    payload: status,
  };
}

export function SET_LUNCH(lunch: Lunch) {
  return {
    type: types.SET_LUNCH,
    payload: lunch
  }
}
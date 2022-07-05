import React, { createContext, useReducer } from 'react';
import lunchReducer from './lunch.reducer';
import { Lunch } from '../../types/lunch';

interface LunchContextTypes {
  lunch: Lunch;
  dispatch: (type: string) => Lunch;
}

interface LunchProviderPropTypes {
  children?: React.ReactNode;
}

const LunchContext = createContext<LunchContextTypes[] | null>(null);

function LunchProvider({ children }: LunchProviderPropTypes) {
  const INITIAL_STATE = {};
  const [lunch, dispatch] = useReducer(lunchReducer, INITIAL_STATE);

  return <LunchContext.Provider value={[lunch, dispatch]}>{children}</LunchContext.Provider>;
}

export { LunchContext, LunchProvider };

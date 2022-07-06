import { createContext, useEffect, useReducer } from 'react';
import { SET_CREDENTIALS, SET_STATUS } from './global.actions';
import { UserStatus } from '../../enums/UserStatus';
import { GlobalState } from '../../types/state';
import globalReducer from './global.reducer';
import { getUserCredentials } from '../../helpers/credentials';

interface LunchContextTypes {
  state: any;
  dispatch: (type: string) => any;
}

const GlobalContext = createContext<any | null>(null);

function GlobalContextProvider({ children }: React.PropsWithChildren) {
  const INITIAL_STATE = {};
  const [state, dispatch] = useReducer(globalReducer, INITIAL_STATE);

  useEffect(() => {
    const userCredentials = getUserCredentials();

    if (!!userCredentials) {
      dispatch(SET_CREDENTIALS(userCredentials));
      dispatch(SET_STATUS(UserStatus.Pending));
    } else {
      dispatch(SET_STATUS(UserStatus.NotLogin));
    }
  }, []);

  return <GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalContextProvider };

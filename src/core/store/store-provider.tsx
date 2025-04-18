import type { FC, PropsWithChildren } from 'react';
import { memo, useReducer } from 'react';
import { Store } from './store';
import { initialState, storeReducer } from './index';

export const StoreProvider: FC<PropsWithChildren> = memo(({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
});

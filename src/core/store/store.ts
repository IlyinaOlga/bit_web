import { createContext } from "react";
import type { StoreDispatch, StoreState } from "./index";
import { initialState } from "./store.state";

export interface IStore {
  state: StoreState;
  dispatch: StoreDispatch;
}

export const Store = createContext<IStore>({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});

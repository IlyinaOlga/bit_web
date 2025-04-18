import type { Reducer } from "react";
import { Dispatch } from "react";
import type { StoreState } from "./index";
import { AuthorizeActions, authorizeReducer } from "./authorize";
import { StoreActions } from "./store.actions";

export type StoreDispatch = Dispatch<StoreActions>;

export const storeReducer: Reducer<StoreState, StoreActions> = (
  state,
  action,
) => {
  return {
    authorizeStore: authorizeReducer(
      state.authorizeStore,
      action as AuthorizeActions,
    ),
  };
};

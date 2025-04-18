import type { AuthorizeActions, AuthorizeStoreStateType } from "./index";
import { AuthorizeActionType } from "./index";

export type AuthorizeReducer = (
  state: AuthorizeStoreStateType,
  action: AuthorizeActions
) => AuthorizeStoreStateType;

export const authorizeReducer: AuthorizeReducer = (state, action) => {
  switch (action.type) {
    case AuthorizeActionType.SetToken: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case AuthorizeActionType.SetName: {
      return {
        ...state,
        name: action.payload,
      };
    }
    default:
      return state;
  }
};

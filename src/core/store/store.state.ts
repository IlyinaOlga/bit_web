import { InitialAuthorizeTypes, initialAuthorizeState } from "./authorize";

export type StoreState = {
  authorizeStore: InitialAuthorizeTypes;
};

export const initialState: StoreState = {
  authorizeStore: initialAuthorizeState,
};

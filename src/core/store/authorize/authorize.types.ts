export enum AuthorizeActionType {
  SetToken = "SET_TOKEN",
  SetName = "SET_NAME",
}

export type InitialAuthorizeTypes = {
  token: string;
  name: string;
};

export type AuthorizeStoreStateType = {
  token: string;
  name: string;
};

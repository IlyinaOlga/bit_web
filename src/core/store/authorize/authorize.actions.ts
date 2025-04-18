import type { Action } from "../../types";
import { AuthorizeActionType } from "./index";

type AuthorizeStoreActionPayloadMap = {
  [AuthorizeActionType.SetToken]: string;
  [AuthorizeActionType.SetName]: string;
};

export const setTokenValue = (payload: string) => ({
  type: AuthorizeActionType.SetToken,
  payload,
});

export const setNameValue = (payload: string) => ({
  type: AuthorizeActionType.SetName,
  payload,
});

export type AuthorizeActions = Action<AuthorizeStoreActionPayloadMap>;

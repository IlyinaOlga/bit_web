export * from "./auth";

export type InitialStateTypes = {
  data: any;
};

export type Method = "get" | "post" | "delete" | "put" | "options" | "patch";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action<T extends { [index: string]: any }> =
  ActionMap<T>[keyof ActionMap<T>];

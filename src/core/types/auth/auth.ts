export interface User {
  id: number;
  first_name: string;
  last_name: string;
  login: string;
}
export interface LoginFormResponseSuccess {
  status: string;
}

export interface LoginErrorResponse {
  status: string;
}

export interface LoginFormValues {
  login: string;
  password: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  login: string;
}
export interface LoginFormResponseSuccess {
  result: boolean;
  user: User;
}
export interface LoginErrorResponse {
  message: string;
  errors: {
    login?: string[];
    password?: string[];
  };
}
export interface LoginErrors {
  login?: string[];
  password?: string[];
}

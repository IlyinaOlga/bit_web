export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginProps {
  open: boolean;
  onClose: () => void;
}

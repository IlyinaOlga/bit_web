export interface RegistrationFormValues {
  name: string;
  email: string;
}

export interface RegistrationProps {
  open: boolean;
  onClose: () => void;
}
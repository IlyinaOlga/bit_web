export interface ConferenceRegistrationFormValues {
  author_names: string;
  send_name: string;
  phone: string;
  email: string;
  title: string;
  type: string;
  annotation: string;
  file: File | undefined;
}

export interface ConferenceRegistrationProps {
  open: boolean;
  onClose: () => void;
}
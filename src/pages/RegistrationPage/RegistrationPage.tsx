import { DialogTitle, DialogActions } from '@mui/material';
import { FC, FormEvent } from 'react';
import {
  FieldGroup,
  LoginCol,
  StyledDialog,
} from '../LoginPage/LoginPage.styled';
import { ContainedButton, FilledField, TextButton } from '../../core/styles';
import { Controller, useForm } from 'react-hook-form';
import { RegistrationFormValues } from './RegistrationPage.types';
import { registrationSchema } from '../../core/scheme';
import { joiResolver } from '@hookform/resolvers/joi';
import { StyledDialogContent } from './RegistrationPage.styled';

interface RegistrationProps {
  open: boolean;
  onClose: () => void;
}

const RegistrationPage: FC<RegistrationProps> = ({ open, onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<RegistrationFormValues>({
    mode: 'onChange',
    resolver: joiResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });
  const onSubmit = (data: any) => {
    // mutate(data);
    console.log(data);
    onClose();
  };
  return (
    <StyledDialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginCol>
          <DialogTitle>Регистрация</DialogTitle>
          <StyledDialogContent>
            <FieldGroup>
              <Controller
                control={control}
                name="name"
                render={({ field: { value, onBlur, onChange } }) => (
                  <FilledField
                    onBlur={onBlur}
                    variant="filled"
                    placeholder="Укажите ваше имя"
                    label="Укажите ваше имя"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.name?.message}
                    helperText={errors?.name?.message}
                    onChange={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="email"
                render={({ field: { value, onBlur, onChange } }) => (
                  <FilledField
                    onBlur={onBlur}
                    variant="filled"
                    placeholder="Ваша эл. почта"
                    label="Ваша эл. почта"
                    type="email"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.email?.message}
                    helperText={errors?.email?.message}
                    onChange={onChange}
                  />
                )}
              />
            </FieldGroup>
          </StyledDialogContent>
          <DialogActions>
            <TextButton onClick={onClose}>Отменить</TextButton>
            <ContainedButton
              type="submit"
              variant="contained"
              disabled={!isValid}
            >
              Зарегистрироваться
            </ContainedButton>
          </DialogActions>
        </LoginCol>
      </form>
    </StyledDialog>
  );
};

export default RegistrationPage;

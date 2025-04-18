import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { FC } from 'react';
import { FieldGroup, StyledDialog } from './LoginPage.styled';
import { ContainedButton, Field, TextButton, FormCol } from '../../core/styles';
import { Controller, useForm } from 'react-hook-form';
import { LoginFormValues, LoginProps } from './LoginPage.types';
import { authSchema } from '../../core/scheme';
import { joiResolver } from '@hookform/resolvers/joi';

const LoginPage: FC<LoginProps> = ({ open, onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    resolver: joiResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
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
        <FormCol>
          <DialogTitle>Вход</DialogTitle>
          <DialogContent>
            <FieldGroup>
              <Controller
                control={control}
                name="email"
                render={({ field: { value, onBlur, onChange } }) => (
                  <Field
                    onBlur={onBlur}
                    variant="standard"
                    placeholder="Ваша эл. почта"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.email?.message}
                    helperText={errors?.email?.message}
                    onChange={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { value, onBlur, onChange } }) => (
                  <Field
                    onBlur={onBlur}
                    variant="standard"
                    placeholder="Пароль"
                    type="password"
                    focused={value ? true : false}
                    value={value}
                    error={!!errors?.password?.message}
                    helperText={errors?.password?.message}
                    onChange={onChange}
                  />
                )}
              />
            </FieldGroup>
          </DialogContent>
          <DialogActions>
            <TextButton onClick={onClose}>Отменить</TextButton>
            <ContainedButton
              type="submit"
              variant="contained"
              disabled={!isValid}
            >
              Войти
            </ContainedButton>
          </DialogActions>
        </FormCol>
      </form>
    </StyledDialog>
  );
};

export default LoginPage;

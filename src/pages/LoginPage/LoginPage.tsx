import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import { FC, FormEvent } from 'react';
import { FieldGroup, LoginCol, StyledDialog } from './LoginPage.styled';
import { ContainedButton, Field, TextButton } from '../../core/styles';

interface LoginProps {
  open: boolean;
  onClose: () => void;
}

const LoginPage: FC<LoginProps> = ({ open, onClose }) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            onClose();
          },
        },
      }}
    >
      <LoginCol>
        <DialogTitle>Вход</DialogTitle>
        <DialogContent>
          <FieldGroup>
            <Field
              autoFocus
              required
              id="email"
              name="email"
              type="email"
              placeholder="Ваша эл. почта"
              fullWidth
              variant="standard"
            />
            <Field
              autoFocus
              required
              id="password"
              name="password"
              type="password"
              placeholder="Пароль"
              fullWidth
              variant="standard"
            />
          </FieldGroup>
        </DialogContent>
        <DialogActions>
          <TextButton onClick={onClose}>Отменить</TextButton>
          <ContainedButton type="submit" variant="contained">
            Войти
          </ContainedButton>
        </DialogActions>
      </LoginCol>
    </StyledDialog>
  );
};

export default LoginPage;

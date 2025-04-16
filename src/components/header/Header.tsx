import { useState, FC } from 'react';
import {
  Group,
  GroupGap12,
  HeaderContainer,
  HeaderTitle,
  LoginBtn,
  LogoutBtn,
  RegistrationBtn,
} from './Header.styled';
import { BetweenContainer, StyledLink } from '../../core/styles';
import { ReactComponent as LogoutIcon } from '../../icons/logout_icon.svg';
import { ReactComponent as LoginIcon } from '../../icons/account_circle.svg';
import { LoginPage } from '../../pages/LoginPage';

const Header: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <HeaderContainer>
      <BetweenContainer>
        <Group>
          <StyledLink to="/">
            <HeaderTitle>Кафедра БИТ</HeaderTitle>
          </StyledLink>
          <StyledLink to="/about">О кафедре</StyledLink>
        </Group>

        <GroupGap12>
          <LoginBtn variant="outlined" onClick={handleClickOpen}>
            <LoginIcon />
            Войти
          </LoginBtn>
          <RegistrationBtn>Зарегистрироваться</RegistrationBtn>
        </GroupGap12>
        {/* <Group>
          <StyledLink to="/login">
            <LogoutBtn>
              <LogoutIcon />
              Выйти
            </LogoutBtn>
          </StyledLink>
        </Group> */}
        {open && <LoginPage open={open} onClose={handleClose} />}
      </BetweenContainer>
    </HeaderContainer>
  );
};

export default Header;

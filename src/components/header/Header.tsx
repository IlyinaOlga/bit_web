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
import { RegistrationPage } from '../../pages/RegistrationPage';

const Header: FC = () => {
  const [openModal, setOpenModal] = useState<'login' | 'registration' | null>(
    null
  );

  const handleOpenLogin = () => {
    setOpenModal('login');
  };

  const handleOpenRegistration = () => {
    setOpenModal('registration');
  };

  const handleClose = () => {
    setOpenModal(null);
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
          <LoginBtn variant="outlined" onClick={handleOpenLogin}>
            <LoginIcon />
            Войти
          </LoginBtn>
          <RegistrationBtn onClick={handleOpenRegistration}>
            Зарегистрироваться
          </RegistrationBtn>
        </GroupGap12>
        {/* <Group>
          <StyledLink to="/login">
            <LogoutBtn>
              <LogoutIcon />
              Выйти
            </LogoutBtn>
          </StyledLink>
        </Group> */}
        {openModal === 'login' && (
          <LoginPage open={true} onClose={handleClose} />
        )}
        {openModal === 'registration' && (
          <RegistrationPage open={true} onClose={handleClose} />
        )}
      </BetweenContainer>
    </HeaderContainer>
  );
};

export default Header;

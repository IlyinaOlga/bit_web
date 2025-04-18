import { useState, FC, useContext, useEffect } from 'react';
import {
  ArticleBtn,
  Group,
  GroupGap12,
  GroupGap8,
  HeaderContainer,
  HeaderTitle,
  LoginBtn,
  LogoutBtn,
  RegistrationBtn,
  User,
} from './Header.styled';
import { BetweenContainer, StyledLink } from '../../core/styles';
import { ReactComponent as LogoutIcon } from '../../icons/logout_icon.svg';
import { ReactComponent as LoginIcon } from '../../icons/account_circle.svg';
import { ReactComponent as ArticleIcon } from '../../icons/custom-lead-icon.svg';
import { LoginPage, RegistrationPage } from '../../pages';
import { Store } from '../../core/store';
import { getLocalStorage, removeLocalStorage } from '../../core/utils';
import { setNameValue } from '../../core/store/authorize';

const Header: FC = () => {
  const [openModal, setOpenModal] = useState<'login' | 'registration' | null>(
    null
  );

  const {
    state: {
      authorizeStore: { name },
    },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    const userName = getLocalStorage('user');

    if (userName) {
      dispatch(setNameValue(userName));
    }
  }, [dispatch]);

  const handleOpenLogin = () => {
    setOpenModal('login');
  };

  const handleOpenRegistration = () => {
    setOpenModal('registration');
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  const logout = () => {
    removeLocalStorage('user');
    const userName = '';
    dispatch(setNameValue(userName));
  };

  return (
    <HeaderContainer>
      <BetweenContainer>
        <Group>
          <StyledLink to='/'>
            <HeaderTitle>Кафедра БИТ</HeaderTitle>
          </StyledLink>
          <StyledLink to='/about'>О кафедре</StyledLink>
        </Group>

        {name ? (
          <Group>
            <GroupGap8>
              <StyledLink to='/article'>
                <ArticleBtn>
                  <ArticleIcon />
                  Статьи для проверки
                </ArticleBtn>
              </StyledLink>
              <User>Здравствуйте, {name}</User>
              <LogoutBtn onClick={logout}>
                <LogoutIcon />
                Выйти
              </LogoutBtn>
            </GroupGap8>
          </Group>
        ) : (
          <GroupGap12>
            <LoginBtn variant='outlined' onClick={handleOpenLogin}>
              <LoginIcon />
              Войти
            </LoginBtn>
            <RegistrationBtn onClick={handleOpenRegistration}>
              Зарегистрироваться
            </RegistrationBtn>
          </GroupGap12>
        )}

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

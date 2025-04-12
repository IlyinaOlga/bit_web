import React from 'react';
import {
  BetweenContainer,
  Group,
  HeaderContainer,
  HeaderTitle,
  LogoutBtn,
} from './Header.styled';
import { StyledLink } from '../../core/styles';
import { ReactComponent as LououtIcon } from '../../icons/logout_icon.svg';

const Header: React.FC<any> = () => {
  return (
    <HeaderContainer>
      <BetweenContainer>
        <Group>
          <StyledLink to="/">
            <HeaderTitle>Кафедра БИТ</HeaderTitle>
          </StyledLink>
          <StyledLink to="/about">О кафедре</StyledLink>
        </Group>

        <Group>
          <StyledLink to="/login">
            <LogoutBtn>
              <LououtIcon />
              Выйти
            </LogoutBtn>
          </StyledLink>
        </Group>
      </BetweenContainer>
    </HeaderContainer>
  );
};

export default Header;

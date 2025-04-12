import { FC } from 'react';
import {
  ContactList,
  ContainerInner,
  Copyright,
  Divider,
  FooterContainer,
  FooterTitle,
  Group,
  ImageGroup,
} from './Footer.styled';
import {
  BetweenContainer,
  Col,
  Container,
  StyledLink,
} from '../../core/styles';
import SfeduLogo from '../../images/sfedu_logo.png';
import IktibLogo from '../../images/iktib_logo.png';

const Footer: FC = () => {
  return (
    <FooterContainer>
      <Container>
        <ContainerInner>
          <BetweenContainer>
            <Col>
              <FooterTitle>Контантная информация</FooterTitle>
              <ContactList>
                <div>Таганрог, Чехова ул. 2</div>
                <div>+7 (8634) 37-19-05</div>
                <div>abramoves@sfedu.ru</div>
              </ContactList>
            </Col>

            <Col>
              <ImageGroup>
                <img src={SfeduLogo} alt="Логотип университета" />
                <img src={IktibLogo} alt="Логотип института" />
              </ImageGroup>
            </Col>
          </BetweenContainer>
        </ContainerInner>

        <BetweenContainer>
          <Group>
            <StyledLink to="/">
              Cогласие на обработку персональных данных
            </StyledLink>
            <Divider />
            <StyledLink to="/">Политика конфиденциальности</StyledLink>
          </Group>
          <Copyright>
            &copy; 2015-2025, Институт компьютерных технологий и информационной
            безопасности ИТА ЮФУ
          </Copyright>
        </BetweenContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

import { FC, useState } from 'react';
import {
  BetweenContainer,
  Container,
  OutlinedButton,
  Section,
  Title,
} from '../../core/styles';
import { CardGroup } from './HomePage.styled';
import { CardComponent } from '../../components';
import { newsArr } from '../../core/mock';

const HomePage: FC<any> = () => {
  return (
    <Container>
      <Section>
        <BetweenContainer>
          <Title>Что нового</Title>
          {/* <OutlinedButton variant='outlined'>Смотреть все</OutlinedButton> */}
        </BetweenContainer>
        <CardGroup>
          {newsArr?.length &&
            newsArr.map((item) => (
              <CardComponent
                id={item.id}
                title={item.title}
                img={item.img}
                text={item.text}
                date={item.date}
              />
            ))}
        </CardGroup>
      </Section>
    </Container>
  );
};

export default HomePage;

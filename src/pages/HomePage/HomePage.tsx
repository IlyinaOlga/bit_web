import { FC, useState } from "react";
import {
  BetweenContainer,
  ColumnGap64,
  Container,
  OutlinedButton,
  Title,
} from "../../core/styles";
import { CardGroup, ConferenceGroup } from "./HomePage.styled";
import { CardComponent, ConferenceCard } from "../../components";
import { newsArr, conferencesArr } from "../../core/mock";

const HomePage: FC<any> = () => {
  return (
    <Container>
      <ColumnGap64>
        <section>
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
        </section>

        <section>
          <BetweenContainer>
            <Title>Предстоящие конференции</Title>
            {/* <OutlinedButton variant="outlined">Смотреть все</OutlinedButton> */}
          </BetweenContainer>
          <ConferenceGroup>
            {conferencesArr?.length &&
              conferencesArr.map((item) => (
                <ConferenceCard
                  id={item.id}
                  title={item.title}
                  details={item.details}
                />
              ))}
          </ConferenceGroup>
        </section>
      </ColumnGap64>
    </Container>
  );
};

export default HomePage;

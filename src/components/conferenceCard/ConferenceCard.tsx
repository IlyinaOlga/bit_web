import { FC } from "react";
import { IConferenceCard } from "./ConferenceCard.interface";
import {
  ConferenceCardButton,
  ConferenceTitle,
  StyledCard,
  StyledChip,
} from "./ConferenceCard.styled";
import { NavLink } from "react-router";

const ConferenceCard: FC<IConferenceCard> = ({ id, title, details }) => {
  return (
    <StyledCard>
      <StyledChip
        label={`${details.country}, ${details.city}, ${details.period}`}
      />
      <ConferenceTitle>{title}</ConferenceTitle>
      <NavLink to={`/conference/${id}`}>
        <ConferenceCardButton variant="contained">
          Узнать подробности
        </ConferenceCardButton>
      </NavLink>
    </StyledCard>
  );
};

export default ConferenceCard;

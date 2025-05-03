import { FC } from "react";
import { IConferenceCard } from "./ConferenceCard.interface";
import {
  ConferenceCardButton,
  ConferenceTitle,
  StyledCard,
  StyledChip,
} from "./ConferenceCard.styled";

const ConferenceCard: FC<IConferenceCard> = ({ id, title, details }) => {
  return (
    <StyledCard>
      <StyledChip
        label={`${details.country}, ${details.city}, ${details.period}`}
      />
      <ConferenceTitle>{title}</ConferenceTitle>
      <ConferenceCardButton variant="contained">
        Узнать подробности
      </ConferenceCardButton>
    </StyledCard>
  );
};

export default ConferenceCard;

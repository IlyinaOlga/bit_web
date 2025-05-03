import { CardContent } from "@mui/material";
import { FC } from "react";
import { ICard } from "./Card.interface";
import {
  CardText,
  CardTitle,
  NewsDate,
  StyledCard,
  StyledCardMedia,
} from "./Card.styled";

const CardComponent: FC<ICard> = ({ id, img, title, text, date }) => {
  return (
    <StyledCard id={id}>
      <StyledCardMedia image={img} title="preview of new" />
      <CardContent>
        <CardTitle gutterBottom variant="h5">
          {title}
        </CardTitle>
        <CardText>{text}</CardText>
        <NewsDate>{date}</NewsDate>
      </CardContent>
    </StyledCard>
  );
};

export default CardComponent;

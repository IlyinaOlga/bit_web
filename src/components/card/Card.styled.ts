import { Card, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import { palette, typography } from "../../core/styles";

export const StyledCard = styled(Card)`
  &.MuiCard-root {
    border-radius: 16px;
    box-shadow: none;
    background: ${palette.colors.surface_light};
    cursor: pointer;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  &.MuiCardMedia-root {
    height: 238px;
    border-radius: 16px;
  }
`;

export const CardTitle = styled(Typography)`
  &.MuiTypography-root {
    ${typography.card_title};
    font-family: Onest;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardText = styled(Typography)`
  &.MuiTypography-root {
    ${typography.card_body};
    font-family: Onest;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const NewsDate = styled.div`
  ${typography.body_small};
  margin-top: 16px;
  color: ${palette.colors.grey_light};
`;
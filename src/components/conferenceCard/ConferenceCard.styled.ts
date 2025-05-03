import styled from "styled-components";
import { ContainedButton, palette, typography } from "../../core/styles";
import { Chip } from "@mui/material";

export const StyledCard = styled.div`
  border-radius: 24px;
  padding: 48px;
  background: ${palette.colors.surface_light};
`;

export const StyledChip = styled(Chip)`
  &.MuiChip-root {
    background-color: ${palette.colors.surface};
    ${typography.body_small};
    margin-bottom: 16px;
  }
`;

export const ConferenceTitle = styled.div`
  ${typography.card_title};
    margin-bottom: 24px;
`;

export const ConferenceCardButton = styled(ContainedButton)`
  &.MuiButton-contained {
    text-transform: none;
  }
`;
import type { FC } from "react";
import {
  StyledToaster,
  StyledToasterContainer,
  StyledMessageContainer,
} from "./Toaster.styled";
import { ToasterProps } from "./Toaster.types";

export const Toaster: FC<ToasterProps> = ({ message }) => {
  return (
    <StyledToaster>
      <StyledToasterContainer>
        <StyledMessageContainer>{message}</StyledMessageContainer>
      </StyledToasterContainer>
    </StyledToaster>
  );
};

import { Dialog } from "@mui/material";
import styled from "styled-components";

export const StyledDialog = styled(Dialog)`
  & .MuiDialog-paper {
    border-radius: 24px;
    box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
  }

  & .MuiDialogTitle-root {
    padding: 32px;
    padding-bottom: 0;
    font-family: Onest;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }

  & .MuiDialogContent-root {
    padding: 32px;
    padding-bottom: 0;
  }

  & .MuiDialogActions-root {
    padding: 0 32px 32px 32px;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 464px;
`;
import { Link } from "react-router";
import styled from "styled-components";
import { typography } from "./typography";
import { Button, FormLabel, RadioGroup, TextField } from "@mui/material";
import { palette } from "./theme";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  ${typography.body_regular};

  &:hover {
    color: ${palette.colors.grey_dark};
    transition: all ease-in-out 0.3s;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1480px;
  height: 100%;
  margin: 0 auto;
  padding: 64px 16px 128px 16px;
`;


export const BetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Grow1 = styled.div`
  flex-grow: 1;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Field = styled(TextField)`
  & .MuiInput-input {
    padding: 10px 12px;
    background-color: #F4F2FE;
    border: none;
    border-radius: 8px;
    font-family: 'Golos Text';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  & .MuiInput-input::placeholder {
    color: ${palette.colors.grey_dark};
    opacity: 1;
  }

  & .MuiInputBase-root {
    margin: 0;
  }

  & .MuiFormControl-root {
    margin-top: 0;
    margin-bottom: 0;
  }

  & .MuiInput-root::after,
  .MuiInput-root::before,
  .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before {
    border: none;
  }

  &.MuiFormHelperText-root {
    color: ${palette.colors.error};
  }
`;

export const TextButton = styled(Button)`
  &.MuiButton-root {
    color: ${palette.colors.primary};
    text-transform: capitalize;
    ${typography.body_regular};
    padding: 10px 12px;
    border-radius: 999px;
  }
  &.MuiButton-root.Mui-disabled svg {
     path {
      fill: rgba(0, 0, 0, 0.26);
    }
  }
`;

export const ContainedButton = styled(Button)`
  &.MuiButton-contained {
    background-color: ${palette.colors.primary};
    border-radius: 999px;
    padding: 10px 16px;
    ${typography.body_regular};
    text-transform: capitalize;
    min-width: 96px;
  }
  &.MuiButton-root:hover {
    background-color: #213fc4;
  }
  &.MuiButton-root.Mui-disabled svg {
     path {
      fill: rgba(0, 0, 0, 0.26);
    }
  }
`;

export const OutlinedButton = styled(Button)`
  &.MuiButton-outlined {
    border: 1px solid ${palette.colors.grey};
    border-radius: 999px;
    padding: 10px 16px;
    ${typography.body_regular};
    text-transform: capitalize;
    min-width: 96px;
    color: ${palette.colors.primary};
  }
  &.MuiButton-root:hover {
    background-color: gainsboro;
  }
`;

export const FilledField = styled(TextField)`
  & .MuiFilledInput-root {
    border-radius: 8px;
  }

  & .MuiFilledInput-input {
    padding: 16px 12px 8px 12px;
    background-color: #F4F2FE;
    border: none;
    border-radius: 8px;
    font-family: 'Golos Text';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  & .MuiFilledInput-input::placeholder {
    color: ${palette.colors.grey_dark};
    opacity: 1;
  }

  & .MuiInputBase-root {
    margin: 0;
  }

  & .MuiFormControl-root {
    margin-top: 0;
    margin-bottom: 0;
  }

  & .MuiFilledInput-root::after,
  .MuiFilledInput-root::before,
  .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before {
    border: none;
  }

  & .MuiInputLabel-root {
    top: -4px;
    ${typography.body_regular};
    color: ${palette.colors.grey};
    font-family: 'Golos Text';
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${palette.colors.grey};
  }

  & .MuiFormHelperText-root {
    color: ${palette.colors.error};
    margin-top: 0;
  }

  & .MuiInputLabel-root.Mui-error {
    color: ${palette.colors.grey};
  }
`;

export const FormCol = styled(Col)`
  gap: 24px;
`;

export const ColumnGap64 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const ColumnGap16 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledLabel = styled(FormLabel)`
  & .MuiFormLabel-root {
    color: ${palette.colors.grey_dark};
    ${typography.body_medium}
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  & .MuiFormControlLabel-label {
    ${typography.body_medium}
  }

  & .MuiSvgIcon-root {
    fill: ${palette.colors.grey_dark}
  }
`;
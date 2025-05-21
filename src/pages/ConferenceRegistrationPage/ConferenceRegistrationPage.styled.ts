import styled from "styled-components";
import { palette, typography } from "../../core/styles";

export const InputUploadContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  & p {
    flex-wrap: wrap
  }
`;

export const InputUpload = styled.label`
  ${typography.body_regular};
  color: ${palette.colors.default};
  background-color: ${palette.colors.surface_light};
  border-radius: 8px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  & svg {
    margin-right: 8px;
  }
  &:hover {
    background-color: ${palette.colors.surface};
  }
`;
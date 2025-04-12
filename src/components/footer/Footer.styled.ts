import styled from "styled-components";
import { palette, typography } from "../../core/styles";

export const FooterContainer = styled.div`
  padding: 32px 0;
  border-top: 1px solid ${palette.colors.grey_light};
`;

export const ContainerInner = styled.div`
  margin-bottom: 32px;
`;

export const FooterTitle = styled.div`
  ${typography.title_medium};
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  ${typography.body_regular};
  margin-top: 8px;
`;

export const ImageGroup = styled.div`
  display: flex;
  gap: 16px;

  & img {
    height: 64px;
  }
`;

export const Group = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${palette.colors.primary};
  ${typography.body_small};
`;

export const Divider = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: ${palette.colors.grey};
`;

export const Copyright = styled.div`
  color: ${palette.colors.grey_light};
  ${typography.body_small};
`;
import styled from "styled-components";
import { palette, typography } from "../../../../core/styles";

export const StyledArticle = styled.div`
  background-color: ${palette.colors.surface_light};
  border-radius: 24px;
  padding: 32px;
  display: flex;
  gap: 48px;
  justify-content: space-between;
`;

export const ArticleData = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 65%;
  max-width: 950px;
`;

export const ArticleAuthor = styled.div`
  width: 414px;
  background-color: ${palette.colors.white_main};
  padding: 12px;
  border-radius: 12px;
`;

export const ArticleAuthorCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ArticleLabel = styled.div`
  margin-bottom: 4px;
  color: ${palette.colors.grey_dark};
  ${typography.body_small};
`;

export const ArticleTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const ArticleTitleText = styled.div`
  ${typography.card_title};
  flex-grow: 1;
`;

export const IconTitle = styled.div`
  background-color: ${palette.colors.surface};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ArticleActions = styled.div`
  margin-top: 12px;
  & svg {
    margin-right: 8px;
  }

`;
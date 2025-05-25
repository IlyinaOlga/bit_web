import { FC, memo } from "react";
import { Article } from "../../ArticlePage.types";
import { StyledArticle } from "./ArticleItem.styled";

interface ArticlesItemProps {
  article: Article | undefined;
}

const ArticleItem: FC<ArticlesItemProps> = memo(({ article }) => {
  return (
    <StyledArticle>
      {article ? <div>{article.title}</div> : <p>Нет статей</p>}
    </StyledArticle>
  );
});

export default ArticleItem;

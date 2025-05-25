import { FC, memo } from "react";
import { Article } from "../../ArticlePage.types";
import ArticleItem from "../ArticleItem/ArticleItem";
import { ArticleGroup } from "./ArticleList.styled";

interface ArticlesListProps {
  articles: Article[] | undefined;
}

const ArticlesList: FC<ArticlesListProps> = memo(({ articles }) => {
  return (
    <ArticleGroup>
      {articles && articles.length > 0 ? (
        articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))
      ) : (
        <p>Нет статей</p>
      )}
    </ArticleGroup>
  );
});

export default ArticlesList;

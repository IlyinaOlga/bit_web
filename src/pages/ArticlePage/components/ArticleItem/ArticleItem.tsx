import { FC, memo } from "react";
import { Article } from "../../ArticlePage.types";
import {
  ArticleActions,
  ArticleAuthor,
  ArticleAuthorCol,
  ArticleData,
  ArticleLabel,
  ArticleTitle,
  ArticleTitleText,
  IconTitle,
  StyledArticle,
} from "./ArticleItem.styled";
import { ReactComponent as DownloadIcon } from "../../../../icons/download.svg";
import { ReactComponent as CancelIcon } from "../../../../icons/cancel.svg";
import { ReactComponent as CheckIcon } from "../../../../icons/check.svg";
import {
  ContainedButton,
  Grow1,
  Text,
  TextButton,
} from "../../../../core/styles";
import axios from "axios";
import { API_ROUTES } from "../../../../core/constants";
import { enqueueSnackbar } from "notistack";

interface ArticlesItemProps {
  article: Article | undefined;
  tab: string;
  refreshArticles: () => void;
}

const ArticleItem: FC<ArticlesItemProps> = memo(
  ({ article, tab, refreshArticles }) => {
    const acceptArticle = (id: number) => {
      axios
        .post(
          `${API_ROUTES.ARTICLE}/${id}/status`,
          {
            status: "accepted",
          },
          { withCredentials: true }
        )
        .then((response) => {
          refreshArticles();
          enqueueSnackbar("Статья одобрена", {
            variant: "reportComplete",
            className: "success",
            preventDuplicate: true,
          });
        })
        .catch((err) => {});
    };

    const cancelArticle = (id: number) => {
      axios
        .post(
          `${API_ROUTES.ARTICLE}/${id}/status`,
          {
            status: "rejected",
          },
          { withCredentials: true }
        )
        .then((response) => {
          refreshArticles();
          enqueueSnackbar("Статья отклонена", {
            variant: "reportComplete",
            className: "success",
            preventDuplicate: true,
          });
        })
        .catch((err) => {});
    };

    const handleDownload = (fileUrl: string) => {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <StyledArticle>
        {article ? (
          <>
            <ArticleData>
              <ArticleTitle>
                <ArticleTitleText>{article.title}</ArticleTitleText>

                <IconTitle onClick={() => handleDownload(article.file)}>
                  <DownloadIcon />
                </IconTitle>
              </ArticleTitle>
              <Grow1>
                <Text>{article.annotation}</Text>
              </Grow1>
              <ArticleActions>
                <ContainedButton
                  variant="contained"
                  onClick={() => acceptArticle(article.id)}
                  disabled={tab === "accepted"}
                >
                  <CheckIcon />
                  Одобрить
                </ContainedButton>
                <TextButton
                  onClick={() => cancelArticle(article.id)}
                  disabled={tab === "rejected"}
                >
                  <CancelIcon />
                  Отклонить
                </TextButton>
              </ArticleActions>
            </ArticleData>
            <ArticleAuthor>
              <ArticleAuthorCol>
                <div>
                  <ArticleLabel>Отправитель заявки</ArticleLabel>
                  <Text>{article.send_name}</Text>
                  <Text>{article.phone}</Text>
                  <Text>{article.email}</Text>
                </div>
                <div>
                  <ArticleLabel>Авторы статьи</ArticleLabel>
                  <Text>{article.author_names}</Text>
                </div>
                <div>
                  <ArticleLabel>Форма участия</ArticleLabel>
                  <Text>{article.type === "online" ? "Онлайн" : "Очная"}</Text>
                </div>
              </ArticleAuthorCol>
            </ArticleAuthor>
          </>
        ) : (
          <p>Нет статей</p>
        )}
      </StyledArticle>
    );
  }
);

export default ArticleItem;

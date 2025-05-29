import { FC, memo, SyntheticEvent, useEffect, useState } from "react";
import { Container, Title } from "../../core/styles";
import { Box } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import axios from "axios";
import { API_ROUTES } from "../../core/constants";
import { ArticleResponse } from "./ArticlePage.types";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import { Spinner } from "../../components";
import { Section, StyledTab, StyledTabList } from "./ArticlePage.styled";

const ArticlePage: FC<any> = memo(() => {
  const [value, setValue] = useState("new");
  const [data, setData] = useState<ArticleResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pages, setPages] = useState<{ [key: string]: number }>({
    new: 1,
    accepted: 1,
    rejected: 1,
  });
  const limit = 10;

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const fetchArticles = async (tab: string, pageNumber: number) => {
    setLoading(true);
    setError(null);
    const endpoint = (() => {
      switch (tab) {
        case "new":
          return API_ROUTES.ARTICLES_NEW;
        case "accepted":
          return API_ROUTES.ARTICLES_ACCEPTED;
        case "rejected":
          return API_ROUTES.ARTICLES_REJECTED;
        default:
          return "";
      }
    })();

    const offset = limit * (pageNumber - 1);

    try {
      const response = await axios.get(endpoint, {
        params: {
          limit: limit,
          offset: offset,
        },
        withCredentials: true,
      });
      setData(response.data);

      setTotalPages(Math.ceil(response.data.all_count / limit));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const pageNum = pages[value] || 1;
    fetchArticles(value, pageNum);
  }, [value, pages]);

  const handlePageChange = (newPage: number) => {
    setPages((prev) => ({ ...prev, [value]: newPage }));
  };

  if (error) {
    console.log(error, "error");

    return <div>Ошибка при загрузке данных</div>;
  }

  return (
    <Container>
      <Section>
        <Title>Статьи</Title>
        {!loading ? (
          <>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <StyledTabList
                  onChange={handleTabChange}
                  aria-label="lab API tabs example"
                >
                  <StyledTab label="Неоцененные статьи" value="new" />
                  <StyledTab label="Одобренные" value="accepted" />
                  <StyledTab label="Отклоненные" value="rejected" />
                </StyledTabList>
              </Box>
              <TabPanel value="new">
                {data && (
                  <ArticlesList
                    articles={data.articles}
                    tab={value}
                    refreshArticles={() => fetchArticles(value, pages[value])}
                  />
                )}
              </TabPanel>
              <TabPanel value="accepted">
                {data && (
                  <ArticlesList
                    articles={data.articles}
                    tab={value}
                    refreshArticles={() => fetchArticles(value, pages[value])}
                  />
                )}
              </TabPanel>
              <TabPanel value="rejected">
                {data && (
                  <ArticlesList
                    articles={data.articles}
                    tab={value}
                    refreshArticles={() => fetchArticles(value, pages[value])}
                  />
                )}
              </TabPanel>
            </TabContext>
            <PaginationComponent
              totalPages={totalPages}
              page={pages[value] || 1}
              setPage={(newPage) => {
                handlePageChange(newPage);
              }}
              refreshArticles={(page) => fetchArticles(value, page)}
            />
          </>
        ) : (
          <Spinner />
        )}
      </Section>
    </Container>
  );
});

export default ArticlePage;

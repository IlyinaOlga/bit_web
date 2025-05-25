import { FC, memo, SyntheticEvent, useEffect, useState } from "react";
import { Container, Title } from "../../core/styles";
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import axios from "axios";
import { API_ROUTES } from "../../core/constants";
import { ArticleResponse } from "./ArticlePage.types";
import ArticlesList from "./components/ArticlesList/ArticlesList";

const ArticlePage: FC<any> = memo(() => {
  const [value, setValue] = useState("new");
  const [data, setData] = useState<ArticleResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const fetchArticles = async (endpoint: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(endpoint, { withCredentials: true });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    switch (value) {
      case "new":
        fetchArticles(API_ROUTES.ARTICLES_NEW);
        break;
      case "accepted":
        fetchArticles(API_ROUTES.ARTICLES_ACCEPTED);
        break;
      case "rejected":
        fetchArticles(API_ROUTES.ARTICLES_REJECTED);
        break;
    }
  }, [value]);

  if (loading) return <div>Загрузка...</div>;
  if (error) {
    console.log(error, "error");

    return <div>Ошибка при загрузке данных</div>;
  }

  return (
    <Container>
      <section>
        <Title>Статьи</Title>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Неоцененные статьи" value="new" />
              <Tab label="Одобренные" value="accepted" />
              <Tab label="Отклоненные" value="rejected" />
            </TabList>
          </Box>
          <TabPanel value="new">
            {data && (
              <ArticlesList
                articles={data.articles}
                tab={value}
                refreshArticles={() => fetchArticles(API_ROUTES.ARTICLES_NEW)}
              />
            )}
          </TabPanel>
          <TabPanel value="accepted">
            {data && (
              <ArticlesList
                articles={data.articles}
                tab={value}
                refreshArticles={() =>
                  fetchArticles(API_ROUTES.ARTICLES_ACCEPTED)
                }
              />
            )}
          </TabPanel>
          <TabPanel value="rejected">
            {data && (
              <ArticlesList
                articles={data.articles}
                tab={value}
                refreshArticles={() =>
                  fetchArticles(API_ROUTES.ARTICLES_REJECTED)
                }
              />
            )}
          </TabPanel>
        </TabContext>
      </section>
    </Container>
  );
});

export default ArticlePage;

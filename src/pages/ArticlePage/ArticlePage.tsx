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
    switch (newValue) {
      case "new":
        getArticlesNew();
        break;
      case "accepted":
        getArticlesAccepted();
        break;
      case "rejected":
        getArticlesRejected();
        break;
    }
  };

  const getArticlesNew = () => {
    setLoading(true);
    axios
      .get(API_ROUTES.ARTICLES_NEW, { withCredentials: true })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  const getArticlesAccepted = () => {
    setLoading(true);
    axios
      .get(API_ROUTES.ARTICLES_ACCEPTED, { withCredentials: true })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  const getArticlesRejected = () => {
    setLoading(true);
    axios
      .get(API_ROUTES.ARTICLES_REJECTED, { withCredentials: true })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getArticlesNew();
  }, []);

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
            {data && <ArticlesList articles={data.articles} />}
          </TabPanel>
          <TabPanel value="accepted">
            {data && <ArticlesList articles={data.articles} />}
          </TabPanel>
          <TabPanel value="rejected">
            {data && <ArticlesList articles={data.articles} />}
          </TabPanel>
        </TabContext>
      </section>
    </Container>
  );
});

export default ArticlePage;

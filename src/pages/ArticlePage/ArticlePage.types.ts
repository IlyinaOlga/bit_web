export interface ArticleResponse {
  all_count: number;
  articles: Article[];
  limit: 10
  offset: number;
}

export interface Article {
  annotation: string;
  author_names: string;
  email: string;
  file: string;
  id: number;
  phone: string;
  send_name: string;
  status: string;
  title: string;
  type: string;
}
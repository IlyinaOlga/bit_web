import { Pagination } from "@mui/material";
import { FC } from "react";

interface PaginationProps {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
  refreshArticles: (page: number) => void;
}

const PaginationComponent: FC<PaginationProps> = ({
  totalPages,
  page,
  setPage,
  refreshArticles,
}) => {
  const handleChange = (event: unknown, value: number) => {
    setPage(value);
    refreshArticles(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={handleChange}
      color="primary"
    />
  );
};

export default PaginationComponent;

import { Pagination } from "@mui/material";
import { FC } from "react";
import { PaginationContainer } from "./PaginationComponent.styled";

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
    <PaginationContainer>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </PaginationContainer>
  );
};

export default PaginationComponent;

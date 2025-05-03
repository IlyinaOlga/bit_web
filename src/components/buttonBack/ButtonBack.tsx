import { FC } from "react";
import { ReactComponent as ArrowBack } from "../../icons/back.svg";
import { StyledButton } from "./ButtonBack.styled";
import { useNavigate } from "react-router";

const ButtonBack: FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledButton onClick={handleBack}>
      <ArrowBack />
      Назад
    </StyledButton>
  );
};

export default ButtonBack;

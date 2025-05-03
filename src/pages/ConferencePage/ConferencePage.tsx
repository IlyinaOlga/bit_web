import { FC } from "react";
import { ButtonBack } from "../../components";
import { ContainerPage } from "./ConferencePage.styled";

const ConferencePage: FC<any> = () => {
  return (
    <ContainerPage>
      <ButtonBack />
      <section></section>
    </ContainerPage>
  );
};

export default ConferencePage;

import { useState, type CSSProperties, type FC } from "react";
import { BeatLoader } from "react-spinners";

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  borderColor: "#0E2FBF",
  height: "100%",
};

export const Spinner: FC = () => {
  let [color, setColor] = useState("#0E2FBF");

  return (
    <BeatLoader
      color={color}
      cssOverride={override}
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

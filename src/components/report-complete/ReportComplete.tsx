import { forwardRef } from "react";
import { SnackbarContent } from "notistack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { ReportCompleteProps } from "./ReportComplete.types";
import { Toaster } from "../toaster";

export const ReportComplete = forwardRef<HTMLDivElement, ReportCompleteProps>(
  ({ ...props }, ref) => {
    return (
      <SnackbarContent ref={ref}>
        <Card>
          <CardActions sx={{ padding: 0 }}>
            {props.message && <Toaster message={props.message} />}
          </CardActions>
        </Card>
      </SnackbarContent>
    );
  }
);

ReportComplete.displayName = "ReportComplete";

// export default ReportComplete;

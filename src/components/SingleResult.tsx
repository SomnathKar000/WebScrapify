import React from "react";
import { Paper } from "@mui/material";
import { Theme } from "@mui/material/styles";

const SingleResult = (props: { result: string }) => {
  const { result } = props;
  return (
    <Paper
      sx={(theme: Theme) => ({
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        maxWidth: "400px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        // whiteSpace: "nowrap",
        minHeight: "100px",
        maxHeight: "200px",
        overflowY: "auto",
      })}
    >
      <p>{result}</p>
    </Paper>
  );
};

export default SingleResult;

import React from "react";
import SingleResult from "./SingleResult";
import { Box } from "@mui/material";
import Loading from "./Loading";
import { useScrapContext } from "../contexts/scrapContext";

const Results = () => {
  const { results, loading } = useScrapContext();
  if (loading) {
    return <Loading />;
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
      {results.map((result: string, index: number) => (
        <SingleResult key={index} result={result} />
      ))}
    </Box>
  );
};

export default Results;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Results from "./Results";
import { useScrapContext } from "../contexts/scrapContext";

const style = {
  margin: 3,
  disply: "flex",
  flexDirection: "column",
};

const InputForm: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const { getResults, results } = useScrapContext();
  const onClick = async () => {
    await getResults(query);
  };
  return (
    <Box sx={style}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <TextField
          size="small"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          variant="outlined"
          helperText="Enter your search query..."
        />
        <Box>
          <Button onClick={onClick} variant="contained">
            Search
          </Button>
        </Box>
      </Box>
      <Results results={results} />
    </Box>
  );
};

export default InputForm;

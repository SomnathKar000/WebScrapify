import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Results from "./Results";
import { getSearchResults } from "../utils/api";

const style = {
  margin: 3,
  disply: "flex",
  flexDirection: "column",
};

const InputForm: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const onClick = async () => {
    await getSearchResults(query);
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

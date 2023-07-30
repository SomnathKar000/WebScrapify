import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useScrapContext } from "../contexts/scrapContext";

const style = {
  margin: 3,
  display: "flex",
  flexDirection: "column",
};

const InputForm = () => {
  const [query, setQuery] = useState<string>("");
  const { getResults, loading } = useScrapContext();
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
          <Button onClick={onClick} disabled={loading} variant="contained">
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InputForm;

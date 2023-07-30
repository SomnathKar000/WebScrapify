import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { useScrapContext } from "../contexts/scrapContext";

const AlertComponent = () => {
  const {
    alert: { type, message, open },
    closeAlert,
  } = useScrapContext();

  return (
    <Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={closeAlert}>
        <Alert onClose={closeAlert} severity={type} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AlertComponent;

import React from "react";
import { CircularProgress } from "@mui/material";

const LoadingMessage = (props) => {
  const { message } = props;
  return (
    <>
      <h3>{message}</h3>
      <CircularProgress />
    </>
  );
};

export default LoadingMessage;

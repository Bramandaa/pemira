import { Alert } from "@mui/material";
import React, { useEffect } from "react";

export default function CustomAlert({ setOpen, message, severity }) {
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(null);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpen(null);
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, [message]);
  return (
    <div>
      <Alert
        className={`capitalize ${severity == "error" && "text-red-500"}`}
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </div>
  );
}

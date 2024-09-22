import { Button, CircularProgress } from "@mui/material";

export function ButtonReact({
  text,
  onclick,
  type,
  width,
  maxWidth,
  disabled = false,
  isLoading = false,
}) {
  return (
    <Button
      sx={{
        bgcolor: "black",
        color: "white",
        mt: "15px",
        mb: "10px",
        width: width,
        maxWidth: maxWidth,
      }}
      onClick={onclick}
      variant="contained"
      type={type}
      disabled={disabled}
    >
      {isLoading ? <CircularProgress size="30px" /> : text}
    </Button>
  );
}

"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ButtonReact } from "./Button";
import { Box, Radio } from "@mui/material";

export default function InstallmentCard({ setValue, value, setStep }) {
  function handleClick() {
    setStep((prevActiveStep) => prevActiveStep + 1);
  }
  return (
    <Card
      sx={{
        minWidth: 300,
        borderRadius: "20px",
        height: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box display={"flex"} width={"100%"} justifyContent={"flex-end"}>
        <Radio
          checked={value === "installment"}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          sx={{ marginRight: "5px" }}
          value="installment"
          name="radio-buttons"
          color="default"
          inputProps={{ "aria-label": "A" }}
        />
      </Box>
      <CardContent>
        <Typography variant="h5" component="div">
          Installment Payment
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonReact
          disabled={value !== "installment"}
          text={"Choose Steps"}
          onclick={handleClick}
        />
      </CardActions>
    </Card>
  );
}

"use client";

import CashCard from "@/components/CashCard";
import InstallmentCard from "@/components/InstallmentCard";
import { Alert, Box, Container } from "@mui/material";
import { useState } from "react";

export default function Payment({ setStep }) {
  const [selectValue, setSelectValue] = useState("cash");
  const [isError, setIsError] = useState(false);
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        height: "100%",
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      {isError && (
        <Alert severity="error">
          something went wrong please try again later
        </Alert>
      )}
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"30px"}
      >
        <CashCard
          value={selectValue}
          setValue={setSelectValue}
          setError={setIsError}
        />
        <InstallmentCard
          setStep={setStep}
          value={selectValue}
          setValue={setSelectValue}
        />
      </Box>
    </Container>
  );
}

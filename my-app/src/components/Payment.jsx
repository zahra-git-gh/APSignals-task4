"use client";

import CashCard from "@/components/CashCard";
import InstallmentCard from "@/components/InstallmentCard";
import { Box, Container } from "@mui/material";
import { useState } from "react";

export default function Payment({ setStep }) {
  const [selectValue, setSelectValue] = useState("cash");
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
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"30px"}
      >
        <CashCard value={selectValue} setValue={setSelectValue} />
        <InstallmentCard
          setStep={setStep}
          value={selectValue}
          setValue={setSelectValue}
        />
      </Box>
    </Container>
  );
}

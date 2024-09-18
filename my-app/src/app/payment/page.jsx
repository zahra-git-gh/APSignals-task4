"use client";

import CashCard from "@/components/CashCard";
import InstallmentCard from "@/components/InstallmentCard";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const store = useSelector((store) => store.user);
  const [selectValue, setSelectValue] = useState("cash");
  return (
    <Container
      maxWidth={"md"}
      sx={{
        height: "100%",
        display: "flex",
        // flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Typography variant="h3" component={"h3"}>
        Choose your payment
      </Typography>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"30px"}
      >
        <CashCard value={selectValue} setValue={setSelectValue} />
        <InstallmentCard value={selectValue} setValue={setSelectValue} />
      </Box>
    </Container>
  );
}

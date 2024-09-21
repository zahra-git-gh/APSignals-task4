"use client";
import MonthTablePlan from "@/components/monthTablePlan";
import { getData } from "@/utils/actions";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Page() {
  const userId = localStorage.getItem("id");
  const [user, setUser] = useState({ fullName: "", email: "" });
  const [payment, setPayment] = useState({
    totalAmount: 0,
    month: 0,
    amountPaid: 0,
    startMonth: "",
  });
  useEffect(() => {
    async function fetchData() {
      const userData = await getData(
        `http://localhost:3000/api/user/${userId}`
      );
      setUser(userData);
      const paymentData = await getData(
        `http://localhost:3000/api/payment/${userId}`
      );
      setPayment(paymentData);
    }
    fetchData();
  }, []);
  return (
    <Container maxWidth={"md"}>
      <Box
        display={"flex"}
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5" component="p">
          {user.fullName}
        </Typography>
        <Typography variant="h5" component="p">
          {user.email}
        </Typography>
        <Typography variant="h5" component="p">
          {payment.month} month plan
        </Typography>
      </Box>
      <Box
        display={"flex"}
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Typography variant="h5" component="p">
          Monthly Payment
        </Typography>
      </Box>
      <MonthTablePlan
        totalAmount={payment.totalAmount}
        month={payment.month}
        amountPaid={payment.amountPaid}
        startMonth={payment.startMonth}
      />
    </Container>
  );
}

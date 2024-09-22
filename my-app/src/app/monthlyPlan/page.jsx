"use client";
import { ButtonReact } from "@/components/Button";
import MonthTablePlan from "@/components/monthTablePlan";
import { getData } from "@/utils/actions";
import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MonthlyPlanPage() {
  const userId = localStorage.getItem("id");
  const [user, setUser] = useState({ fullName: "", email: "" });
  const [payment, setPayment] = useState({
    totalAmount: 0,
    month: 0,
    amountPaid: 0,
    startMonth: "",
  });
  const router = useRouter();
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
    <Container
      maxWidth={"md"}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <ButtonReact
        onclick={() => router.replace("/")}
        text={"Back Home Page"}
      />
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

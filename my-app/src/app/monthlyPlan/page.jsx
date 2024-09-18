"use client";

import MonthTablePlan from "@/components/monthTablePlan";
import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Page() {
  const { user, payment } = useSelector((store) => store.user);
console.log(payment);
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
      <MonthTablePlan totalAmount={payment.totalAmount} month={payment.month} amountPaid={payment.amountPaid}
  startMonth={payment.startMonth}/>
    </Container>
  );
}

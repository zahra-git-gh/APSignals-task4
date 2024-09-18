"use client";
import { ButtonReact } from "@/components/Button";
import InstallmentStepsCard from "@/components/InstallmentStepsCard";
import { setPayment } from "@/redux/userSlice";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const store = useSelector((store) => store.user.payment);
  const [selectValue, setSelectValue] = useState("Three");
  const router = useRouter();
  const data = {
    two: {
      cash: false,
      installment: true,
      month: 2,
      totalAmount: 13500000,
      amountPaid: 6750000,
    },
    three: {
      cash: false,
      installment: true,
      month: 3,
      totalAmount: 14500000,
      amountPaid: 4833000,
    },
    four: {
      cash: false,
      installment: true,
      month: 4,
      totalAmount: 15500000,
      amountPaid: 3875000,
    },
  };
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setPayment(data[selectValue.toLowerCase()]));
    router.replace("/monthlyPlan");
  }
  return (
    <Container
      maxWidth={"md"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        display={"flex"}
        gap={"50px"}
        width={"100%"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        <InstallmentStepsCard
          value={selectValue}
          month={2}
          totalAmount={13500000}
          setValue={setSelectValue}
        />
        <InstallmentStepsCard
          value={selectValue}
          month={3}
          totalAmount={14500000}
          setValue={setSelectValue}
          isShow={true}
        />
        <InstallmentStepsCard
          value={selectValue}
          month={4}
          totalAmount={155000000}
          setValue={setSelectValue}
        />
      </Box>
      <ButtonReact
        onclick={handleClick}
        width={"100%"}
        maxWidth={"400px"}
        text={"Get Started"}
      />
    </Container>
  );
}

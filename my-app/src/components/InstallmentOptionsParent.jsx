"use client";
import { ButtonReact } from "@/components/Button";
import InstallmentStepsCard from "@/components/InstallmentStepsCard";
import { postData } from "@/utils/actions";
import { Box, Container, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InstallmentOptionsParent({ setStep }) {
  const [selectValue, setSelectValue] = useState("Three");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const data = {
    two: {
      month: 2,
      totalAmount: 13500000,
    },
    three: {
      month: 3,
      totalAmount: 14500000,
    },
    four: {
      month: 4,
      totalAmount: 15500000,
    },
  };
  async function handleClick() {
    setIsLoading(true);
    const userId = localStorage.getItem("id");
    const newData = await postData("http://localhost:3000/api/payment", {
      userId,
      ...data[selectValue.toLowerCase()],
    });
    console.log(newData);
    setIsLoading(false);
    router.replace("/monthlyPlan");
  }
  function handleClickBackBtn() {
    setStep((prevActiveStep) => prevActiveStep - 1);
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
        disabled={isLoading}
      />
      <Button
        sx={{
          color: "black",
          mt: "15px",
          mb: "10px",
          width: "100%",
          maxWidth: "400px",
        }}
        disabled={isLoading}
        variant="outlined"
        onClick={handleClickBackBtn}
      >
        Back
      </Button>
    </Container>
  );
}

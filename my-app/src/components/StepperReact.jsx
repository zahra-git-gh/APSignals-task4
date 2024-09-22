"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Form from "./Form";
import Payment from "./Payment";
import InstallmentOptionsParent from "./InstallmentOptionsParent";

export default function StepperReact() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    {
      label: "Login To Your Account",
      description: <Form setStep={setActiveStep} />,
    },
    {
      label: "Selecet Your Payment Type",
      description: <Payment setStep={setActiveStep} />,
    },
    {
      label: "Choose Your Installment Payment Method",
      description: <InstallmentOptionsParent setStep={setActiveStep} />,
    },
  ];
  const maxSteps = steps.length;

  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ width: "100%" }}>{steps[activeStep].description}</Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  );
}

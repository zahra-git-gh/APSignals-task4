import { Box, Typography } from "@mui/material";
import StepperReact from "@/components/StepperReact";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography mb={1} variant="h4">
          Payment
        </Typography>
        <StepperReact />
      </Box>
    </main>
  );
}

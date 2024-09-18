"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Radio } from "@mui/material";
import { teal } from "@mui/material/colors";
import { formatNumber, numberToWords } from "@/utils/numberFuncs";

export default function InstallmentStepsCard({
  setValue,
  value,
  month,
  totalAmount,
  isShow = false,
}) {
  
  const wordsOfMonth = numberToWords(month);
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pl: 4,
      }}
    >
      <CardContent>
        <Box
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5" component="div">
            {wordsOfMonth} Month Plan
          </Typography>
          <Radio
            checked={value === wordsOfMonth}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={wordsOfMonth}
            name="radio-buttons"
            color="default"
            inputProps={{ "aria-label": "A" }}
          />
        </Box>
        <Box
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5" component="div">
            {formatNumber(totalAmount)}
          </Typography>
          <Box
            display={isShow ? "block" : "none"}
            width={55}
            borderRadius={"15px"}
            height={20}
            p={1}
            bgcolor={teal[300]}
          >
            Popular
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

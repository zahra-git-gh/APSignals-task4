"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { ButtonReact } from "./Button";
import { Box, Radio } from "@mui/material";
import { useRouter } from "next/navigation";
import { postData } from "@/utils/actions";

export default function CashCard({ setValue, value }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleClick() {
    //post data of payment
    setIsLoading(true);
    const userId = localStorage.getItem("id");
    const data = { userId, totalAmount: 12000000, month: 1 };
    const newData = await postData("http://localhost:3000/api/payment", data);
    console.log("new data of payment :", newData);
    setIsLoading(false);
    router.replace("/monthlyPlan");
  }
  return (
    <Card
      sx={{
        minWidth: 300,

        borderRadius: "20px",
        height: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box display={"flex"} width={"100%"} justifyContent={"flex-end"}>
        <Radio
          checked={value === "cash"}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          sx={{ marginRight: "5px" }}
          value="cash"
          name="radio-buttons"
          color="default"
          inputProps={{ "aria-label": "A" }}
        />
      </Box>
      <CardContent>
        <Typography variant="h5" component="div">
          Cash Payment
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonReact
          disabled={value !== "cash" || isLoading}
          text={"Get Started"}
          onclick={handleClick}
        />
      </CardActions>
    </Card>
  );
}

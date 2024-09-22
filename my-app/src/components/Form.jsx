"use client";
import { Alert, Container, TextField } from "@mui/material";
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ButtonReact } from "./Button";
import { useState } from "react";
import { postData } from "@/utils/actions";

export default function Form({ setStep }) {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState();
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsError(false);
    const data = {
      fullName,
      birthDate: birthDate.$d,
      phonNumber: phoneNum,
      email,
    };
    //post data
    setIsLoading(true);
    const newData = await postData("http://localhost:3000/api/user", data);
    if (!newData._id) {
      setIsError(true);
      setIsLoading(false);
      return;
    }
    localStorage.setItem("id", newData._id);
    setIsLoading(false);
    //reset input
    setFullName("");
    setBirthDate(null);
    setPhoneNum("");
    setEmail("");
    setStep((prevActiveStep) => prevActiveStep + 1);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth={"md"}>
        {isError && (
          <Alert severity="error">
            something went wrong please try again later
          </Alert>
        )}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexWrap: "wrap",
            rowGap: "20px",
            columnGap: "10px",
            justifyContent: "center",
          }}
        >
          <TextField
            id="outlined-error-helper-text"
            label="Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            sx={{ marginTop: "15px", maxWidth: "380px", width: "100%" }}
            disabled={isLoading}
          />
          <TextField
            required
            id="outlined-error-helper-text"
            label="Email"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginTop: "15px", maxWidth: "380px" }}
            disabled={isLoading}
          />
          <DateField
            required
            label="Birth Of Date"
            disableFuture={true}
            fullWidth
            views={["year", "month", "day"]}
            value={birthDate}
            onChange={(newValue) => {
              setBirthDate(newValue);
            }}
            sx={{ marginTop: "15px", maxWidth: "380px" }}
            disabled={isLoading}
          />
          <TextField
            required
            id="outlined-error-helper-text"
            label="Phone number"
            fullWidth
            type="tel"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            sx={{ marginTop: "15px", maxWidth: "380px" }}
            disabled={isLoading}
          />
          <ButtonReact
            text={"Next"}
            type="submit"
            width={"100%"}
            maxWidth={"380px"}
            disabled={isLoading}
            isLoading={isLoading}
          />
        </form>
      </Container>
    </LocalizationProvider>
  );
}

"use client";
import { Container, TextField } from "@mui/material";
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ButtonReact } from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "@/redux/userSlice";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState();
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ fullName, birthDate: birthDate.$d, phoneNum, email });
    dispatch(
      setUser({
        fullName,
        birthDate: birthDate.$d,
        phoneNumber: phoneNum,
        email,
      })
    );
    setFullName("");
    setBirthDate(null);
    setPhoneNum("");
    setEmail("");
    router.replace("/payment");
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth={"md"}>
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
          />
          <DateField
            required
            label="Birth Of Date"
            disableFuture={true}
            fullWidth
            views={["year", "month", "day"]}
            value={birthDate}
            onChange={(newValue) => {
              console.log(newValue.$d);
              setBirthDate(newValue);
            }}
            sx={{ marginTop: "15px", maxWidth: "380px" }}
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
          />
          <ButtonReact
            text={"Next"}
            type="submit"
            width={"100%"}
            maxWidth={"380px"}
          />
        </form>
      </Container>
    </LocalizationProvider>
  );
}

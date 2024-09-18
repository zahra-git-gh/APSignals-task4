import Form from "@/components/Form";
import styles from "./page.module.css";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography mb={10} variant="h4">
        Login For Payment
      </Typography>
      <Form />
    </main>
  );
}

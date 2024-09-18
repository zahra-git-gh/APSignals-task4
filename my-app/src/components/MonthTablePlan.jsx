"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatNumber } from "@/utils/numberFuncs";
import { Button } from "@mui/material";

const rows = [];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Au",
  "Septembergust",
  "October",
  "November",
  "December",
];

export default function MonthTablePlan({
  month,
  totalAmount,
  amountPaid,
  startMonth,
}) {
  console.log(1);
  let indexMonths = Number(startMonth);
//   for (let index = 1; index < 1; index++) {
//     rows.push({
//       nameMonth: months[indexMonths],
//       status: index === 0 ? "paid" : "pending",
//       amount: formatNumber(Math.round(totalAmount / month)),
//     });
//     indexMonths++;
//   }
  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            // <TableRow
            //   key={row.nameMonth}
            //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            // >
            //   <TableCell component="th" scope="row">
            //     {row.nameMonth}
            //   </TableCell>
            //   <TableCell align="right">{row.amount}</TableCell>
            //   <TableCell align="right">{row.status}</TableCell>
            //   <TableCell align="right">
            //     <Button variant="contained">Pay</Button>
            //   </TableCell>
            // </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

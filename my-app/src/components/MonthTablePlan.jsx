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
import { teal, yellow } from "@mui/material/colors";

function generateInstallmentMonths(startMonthName, numberOfMonths) {
  const monthNames = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };
  const arrayMonthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const startDate = new Date(`${new Date().getFullYear()} ${startMonthName}`);
  const array = new Array(numberOfMonths).fill(null);
  return array.map((item, i) => {
    if (i === 0) {
      return startMonthName;
    } else {
      const nextMonth = new Date(
        startDate.getFullYear(),
        monthNames[startMonthName] + i,
        1
      );
      const nameNextMonth = arrayMonthNames[nextMonth.getMonth()];
      return nameNextMonth;
    }
  });
}

export default function MonthTablePlan({ month, totalAmount, startMonth }) {
  const installmentMonths = generateInstallmentMonths(startMonth, month);
  const length = Number(month);
  const array = new Array(length).fill(null);
  const rows = array.map((item, i) => {
    return {
      nameMonth: installmentMonths[i],
      status: i === 0 ? "paid" : "pending",
      amount: formatNumber(Math.round(totalAmount / month)),
    };
  });

  console.log(rows);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Month</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            const [isPaid, setIsPaid] = React.useState(
              row.status === "paid" || false
            );
            return (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.nameMonth}
                </TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell
                  key={i}
                  align="center"
                  sx={{
                    bgcolor:
                      row.status === "paid" || isPaid ? teal[200] : yellow[200],
                  }}
                >
                  {isPaid ? "Paid" : "Pending"}
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => setIsPaid(true)}
                    disabled={row.status === "paid" || isPaid}
                    variant="contained"
                  >
                    Pay
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

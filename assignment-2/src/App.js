import React from "react";
import "./App.css";
import {
  Table,
  TableContainer,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const TableHeadCell = styled(TableCell)({
  backgroundColor: "#159A9C",
  color: "#FFFFFF",
  border: "1px solid #002333",
  paddingTop: "13px",
  paddingBottom: "13px",
});

const TableBodyCell = styled(TableCell)({
  backgroundColor: "#DEEFE7",
  color: "#002333",
  border: "1px solid #002333",
  paddingTop: "10px",
  paddingBottom: "10px",
});

const TableFinalRow = styled(TableRow)({
  backgroundColor: "#DEEFE7",
  color: "#002333",
});

const App = () => {
  const [data, setData] = useState([]);
  const [TotalMale, setTotalMale] = useState(0);
  const [TotalFemale, setTotalFemale] = useState(0);
  const API = "https://gorest.co.in/public/v2/users";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
        const Total = res.length;
        var MaleCount = 0;
        res.forEach((ele) => {
          if (ele.gender === "male") MaleCount++;
        });
        setTotalMale(MaleCount);
        setTotalFemale(Total - MaleCount);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main">
      <div className="my_table">
        <TableContainer component={Paper}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableHeadCell>Id</TableHeadCell>
                <TableHeadCell align="center">Name</TableHeadCell>
                <TableHeadCell align="center">Email</TableHeadCell>
                <TableHeadCell align="center">Gender</TableHeadCell>
                <TableHeadCell align="center">Status</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id} style={{ backgroundColor: "#DEEFE7" }}>
                  <TableBodyCell component="th" scope="row">
                    {row.id}
                  </TableBodyCell>
                  <TableBodyCell align="center">{row.name}</TableBodyCell>
                  <TableBodyCell align="center">{row.email}</TableBodyCell>
                  <TableBodyCell align="center">{row.gender}</TableBodyCell>
                  <TableBodyCell>
                    <div
                      style={{
                        backgroundColor:
                          (row.status === "active" && "green") ||
                          (row.status === "inactive" && "red"),
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                        borderRadius: 8,
                        color: "#DEEFE7",
                        padding: "1px 10px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      align="center"
                    >
                      {row.status}
                    </div>
                  </TableBodyCell>
                </TableRow>
              ))}
              <TableFinalRow>
                <TableCell align="right" colSpan={5}>
                  <div style={{ padding: "4px 10px", display: "inline" }}>
                    <b>Total Male:</b> {TotalMale}
                  </div>
                  <div style={{ padding: "4px 10px", display: "inline" }}>
                    <b>Total Female:</b> {TotalFemale}
                  </div>
                </TableCell>
              </TableFinalRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default App;

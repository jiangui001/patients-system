// app/patients/page.tsx
"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function PatientListPage() {
  const [patients, setPatients] = useState<Patient[]>([]);

  async function fetchData() {
    // 获取患者列表
    const res = await fetch("/api/patients");
    const resData = await res.json();

    setPatients(resData);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Typography variant="h5" sx={{ p: 2 }}>
        患者列表
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>编号</TableCell>
            <TableCell>姓名</TableCell>
            <TableCell>年龄</TableCell>
            <TableCell>性别</TableCell>
            <TableCell>医院</TableCell>
            <TableCell>操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.id}</TableCell>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell width={300}>{patient.hospital}</TableCell>
              <TableCell width={150}>
                <Button
                  variant="contained"
                  component="a"
                  href={`/patients/${patient.id}`}
                >
                  查看详情
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

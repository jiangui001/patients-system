"use client";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
  Avatar,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";

type PatientInfo = {
  姓名: string;
  性别: string;
  年龄: number;
  爱好: string;
  家庭情况: string;
  photoUrl: string;
};

type MedicalHistory = {
  现病史: string;
  既往病史: string;
  功能情况: string;
};

type TransferDetail = {
  接送时间: string;
  接送人员: string;
  接送方式: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  patientInfo: PatientInfo;
  medicalHistory: MedicalHistory;
  transferDetail: TransferDetail;
};

export default function PatientTransferDialog({
  open,
  onClose,
  patientInfo,
  medicalHistory,
  transferDetail,
}: Props) {
  const router = useRouter();
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>患者接送详情</DialogTitle>
      <DialogContent>
        {/* 患者个人信息 */}
        <Typography variant="h6" gutterBottom>
          患者个人信息
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography>姓名：{patientInfo.姓名}</Typography>
            <Typography>性别：{patientInfo.性别}</Typography>
            <Typography>年龄：{patientInfo.年龄}</Typography>
            <Typography>爱好：{patientInfo.爱好}</Typography>
            <Typography>家庭情况：{patientInfo.家庭情况}</Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src={patientInfo.photoUrl}
              alt={patientInfo.姓名}
              imgProps={{
                style: {
                  objectFit: "contain",
                },
              }}
              sx={{
                width: 120,
                height: 120,
                boxShadow: 2,
              }}
            />
          </Grid>
        </Grid>
        <Divider sx={{ mb: 2 }} />

        {/* 既往病史 */}
        <Typography variant="h6" gutterBottom>
          既往病史
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography>现病史：{medicalHistory.现病史}</Typography>
          <Typography>既往病史：{medicalHistory.既往病史}</Typography>
          <Typography>功能情况：{medicalHistory.功能情况}</Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />

        {/* 接送详情 */}
        <Typography variant="h6" gutterBottom>
          接送详情
        </Typography>
        <Box>
          <Typography>接送时间：{transferDetail.接送时间}</Typography>
          <Typography>接送人员：{transferDetail.接送人员}</Typography>
          <Typography>接送方式：{transferDetail.接送方式}</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">
          患者详情
        </Button>
        <Button
          onClick={() => {
            router.push("/patient-archive-update");
          }}
          variant="contained"
        >
          确定接收
        </Button>
      </DialogActions>
    </Dialog>
  );
}

"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  TextField,
  Stack,
} from "@mui/material";
import PatientTransferDialog from "../../components/PatientTransferDialog";
import { useRouter } from "next/navigation";

export default function PatientArchiveUpdate() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [patientInfo, setPatientInfo] = useState({
    姓名: "张某",
    性别: "女",
    年龄: 65,
    爱好: "唱歌、手工",
    家庭情况: "育有一子一女，女儿街道办工作人员，儿子外出务工",
    photoUrl: "/avatars/avatars.png",
  });

  const [medicalHistory, setMedicalHistory] = useState({
    现病史: "2月前患者情绪激动后突感右侧肢体无力、伴头是，临床诊断为脑出血。",
    既往病史: "高血压病史10余年，未规律丢服药。",
    功能情况:
      "肌张力正常；Brunnstrom分期上肢V期，手IV期，下肢V期；berg评分48分，平衡功能良好；日常生活活动能力评分90分，基础性日常生活自理能力良好。",
  });

  const [transferDetail, setTransferDetail] = useState({
    接送时间: "2025-08-20",
    接送人员: "治疗师小玉",
    接送方式: "自行前往",
  });

  // 保存/暂存处理
  const handleSave = () => {
    // TODO: 保存到后端或本地
    alert("保存成功！");
  };

  // const handleTempSave = () => {
  //   // TODO: 暂存到本地或后端
  //   alert("已暂存！");
  // };

  // 通用输入处理
  const handleChange = (objSetter: any, obj: any, key: string, value: any) => {
    objSetter({ ...obj, [key]: value });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        档案更新
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={2}>
                <TextField
                  label="姓名"
                  value={patientInfo.姓名}
                  onChange={(e) =>
                    handleChange(
                      setPatientInfo,
                      patientInfo,
                      "姓名",
                      e.target.value
                    )
                  }
                  fullWidth
                />
                <TextField
                  label="性别"
                  value={patientInfo.性别}
                  onChange={(e) =>
                    handleChange(
                      setPatientInfo,
                      patientInfo,
                      "性别",
                      e.target.value
                    )
                  }
                  fullWidth
                />
                <TextField
                  label="年龄"
                  type="number"
                  value={patientInfo.年龄}
                  onChange={(e) =>
                    handleChange(
                      setPatientInfo,
                      patientInfo,
                      "年龄",
                      e.target.value
                    )
                  }
                  fullWidth
                />
                <TextField
                  label="家庭情况"
                  value={patientInfo.家庭情况}
                  onChange={(e) =>
                    handleChange(
                      setPatientInfo,
                      patientInfo,
                      "家庭情况",
                      e.target.value
                    )
                  }
                  fullWidth
                  multiline
                />
                <TextField
                  label="兴趣爱好"
                  value={patientInfo.爱好}
                  onChange={(e) =>
                    handleChange(
                      setPatientInfo,
                      patientInfo,
                      "爱好",
                      e.target.value
                    )
                  }
                  fullWidth
                  multiline
                />
              </Stack>
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
                sx={{ width: 120, height: 120, boxShadow: 2 }}
                imgProps={{
                  style: {
                    objectFit: "contain",
                  },
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              label="现病史"
              value={medicalHistory.现病史}
              onChange={(e) =>
                handleChange(
                  setMedicalHistory,
                  medicalHistory,
                  "现病史",
                  e.target.value
                )
              }
              fullWidth
              multiline
            />
            <TextField
              label="既往病史"
              value={medicalHistory.既往病史}
              onChange={(e) =>
                handleChange(
                  setMedicalHistory,
                  medicalHistory,
                  "既往病史",
                  e.target.value
                )
              }
              fullWidth
              multiline
            />
            <TextField
              label="功能情况"
              value={medicalHistory.功能情况}
              onChange={(e) =>
                handleChange(
                  setMedicalHistory,
                  medicalHistory,
                  "功能情况",
                  e.target.value
                )
              }
              fullWidth
              multiline
            />
          </Stack>
        </CardContent>
      </Card>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              label="接送时间"
              value={transferDetail.接送时间}
              onChange={(e) =>
                handleChange(
                  setTransferDetail,
                  transferDetail,
                  "接送时间",
                  e.target.value
                )
              }
              fullWidth
            />
            <TextField
              label="接送人员"
              value={transferDetail.接送人员}
              onChange={(e) =>
                handleChange(
                  setTransferDetail,
                  transferDetail,
                  "接送人员",
                  e.target.value
                )
              }
              fullWidth
            />
            <TextField
              label="接送方式"
              value={transferDetail.接送方式}
              onChange={(e) =>
                handleChange(
                  setTransferDetail,
                  transferDetail,
                  "接送方式",
                  e.target.value
                )
              }
              fullWidth
            />
          </Stack>
        </CardContent>
      </Card>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          保存
        </Button>
        {/* <Button variant="outlined" color="primary" onClick={handleTempSave}>
          暂存
        </Button> */}
        <Button
          variant="contained"
          onClick={() => {
            router.push("/assessment");
          }}
        >
          进入评估
        </Button>
      </Stack>
      <PatientTransferDialog
        open={open}
        onClose={() => setOpen(false)}
        patientInfo={patientInfo}
        medicalHistory={medicalHistory}
        transferDetail={transferDetail}
      />
    </Box>
  );
}

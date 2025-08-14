"use client";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Avatar,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function AssessmentPage() {
  const router = useRouter();

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      <Grid justifyContent="center">
        <Grid size={{ xs: 12, md: 10 }}>
          <Paper sx={{ p: 4, borderRadius: 0, boxShadow: 0 }}>
            {/* 顶部标题栏 */}
            <Box
              sx={{
                bgcolor: "#1976d2",
                color: "#fff",
                px: 3,
                py: 2,
                borderRadius: 2,
                mb: 3,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ width: 56, height: 56, mr: 2 }}
                src="/avatars/avatars.png"
                imgProps={{
                  style: {
                    objectFit: "contain",
                  },
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  张某患者康复综合评估表
                </Typography>
                <Typography variant="body2">
                  姓名：张某　年龄：65　诊断：脑出血
                </Typography>
              </Box>
            </Box>
            {/* 评估卡片区 */}
            <Grid container spacing={3} sx={{ mb: 3 }}>
              {/* Berg平衡评定 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: "#e3f2fd" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, mb: 2 }}
                  >
                    Berg平衡量表
                  </Typography>
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="由坐到站"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="独立站立"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="无靠背坐"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="双足着地"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="从站到坐"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="转移"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="无支持闭目站立"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="双脚并拢无支持站立"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="站立时上肢向前上举"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="站立转身向后看"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="转身360°"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="上台阶"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="双足前后站立"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="单足站立"
                  />
                </Paper>
              </Grid>
              {/* 手功能评估 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: "#e3f2fd" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, mb: 2 }}
                  >
                    偏瘫手功能评估
                  </Typography>
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="剪纸"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="取硬币"
                  />
                  <FormControlLabel control={<Checkbox />} label="撑伞10秒" />
                  <FormControlLabel control={<Checkbox />} label="剪指甲" />
                  <FormControlLabel control={<Checkbox />} label="系纽扣" />
                </Paper>
              </Grid>
              {/* 认知测评 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: "#e3f2fd" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, mb: 2 }}
                  >
                    认知测评
                  </Typography>
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="定向力"
                  />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="计算力"
                  />
                  <FormControlLabel control={<Checkbox />} label="记忆力" />
                  <FormControlLabel control={<Checkbox />} label="视空间能力" />
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="言语能力"
                  />
                </Paper>
              </Grid>
            </Grid>
            <Divider sx={{ my: 3 }} />
            {/* 底部按钮区 */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                sx={{ fontWeight: 700 }}
                onClick={() => {
                  router.push("/recovery-advice", { scroll: false });
                }}
              >
                生成康复方案
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

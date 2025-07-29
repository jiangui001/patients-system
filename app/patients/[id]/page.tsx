import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";

const navItems = [
  "患者信息",
  "注诊医院信息",
  "诊诊医院信息",
  "诊断信息",
  "诊断信息",
  "功能评估",
  "量表评分",
  "其他信息",
];

export default function PatientDetailPage() {
  const currentNav = 0;

  return (
    <div>
      <Paper sx={{ p: 4, bgcolor: "#fff", boxShadow: 3 }}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          sx={{ mb: 4, fontWeight: 700 }}
        >
          患者就诊信息录入表
        </Typography>
        {/* 患者信息 */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            患者信息
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField label="姓名" value="张桂花" fullWidth />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField label="年龄" value="55岁" fullWidth />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField label="性别" value="女" fullWidth />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField label="联系方式" value="138****8888" fullWidth />
            </Grid>
          </Grid>
        </Box>
        {/* 注诊医院信息 */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            注诊医院信息
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField label="医院名称" value="省人民医院" fullWidth />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField label="科室" value="神经内科" fullWidth />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField label="住院号" value="A20250726" fullWidth />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField label="入院时间" value="2025-07-26" fullWidth />
            </Grid>
          </Grid>
        </Box>
        {/* 诊诊医院信息 */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            诊诊医院信息
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField label="医院名称" value="市中心医院" fullWidth />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField label="科室" value="康复科" fullWidth />
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <TextField label="出院时间" value="2025-08-20" fullWidth />
            </Grid>
          </Grid>
        </Box>
        {/* 诊断信息 */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            诊断信息
          </Typography>
          <TextField
            label="主要诊断"
            value="脑出血（左侧基底节区）"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="既往病史"
            value="高血压病3级（很高危组）"
            fullWidth
            sx={{ mb: 2 }}
          />
        </Box>
        {/* 功能评估 */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            功能评估
          </Typography>
          <TextField
            label="Brunnstrom分期"
            value="右上肢4期，右手4期，右下肢5期"
            fullWidth
            sx={{ mb: 2 }}
          />
        </Box>
        {/* 量表评分 */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            量表评分
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <FormControlLabel control={<Checkbox checked />} label="评分" />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField label="分数" value="5分" sx={{ width: 100 }} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField label="Berg平衡量表" value="50分" fullWidth />
            </Grid>
          </Grid>
        </Box>
        {/* 其他信息 */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            其他信息
          </Typography>
          <TextField label="功能状态备注" value="功能休状况：备注" fullWidth />
        </Box>
        {/* 按钮区块 */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 4 }}>
          <Button
            variant="contained"
            color="error"
            component="a"
            href="/assessment"
            sx={{ px: 6, py: 2, fontSize: 24, fontWeight: 700 }}
          >
            进入评估系统
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ px: 6, py: 2, fontSize: 24, fontWeight: 700 }}
          >
            返回
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

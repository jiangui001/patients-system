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

export default function AssessmentPage() {
  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh", py: 6 }}>
      <Grid container justifyContent="center">
        <Grid size={{ xs: 12, md: 10 }}>
          <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 4 }}>
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
              <Avatar sx={{ width: 56, height: 56, mr: 2 }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  张桂花患者康复综合评估表
                </Typography>
                <Typography variant="body2">
                  姓名：张桂花　年龄：55　诊断：脑出血
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
                    Berg平衡评定
                  </Typography>
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="站位站稳"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="立位换向自稳"
                  />
                  <FormControlLabel control={<Checkbox />} label="转身360°" />
                  <FormControlLabel control={<Checkbox />} label="单脚站立" />
                </Paper>
              </Grid>
              {/* 手功能评估 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper sx={{ p: 2, borderRadius: 2, bgcolor: "#e3f2fd" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, mb: 2 }}
                  >
                    手功能评估
                  </Typography>
                  <FormControlLabel
                    control={<Checkbox checked />}
                    label="患手剪指甲"
                  />
                  <FormControlLabel control={<Checkbox />} label="患手拧瓶" />
                  <FormControlLabel control={<Checkbox />} label="患手拿硬币" />
                  <FormControlLabel control={<Checkbox />} label="患手拿10s" />
                  <FormControlLabel control={<Checkbox />} label="患手抓球子" />
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
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    注意力（评定：完成）
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    计算力（评定：完成）
                  </Typography>
                  <Typography variant="body2">
                    视觉空间（评定：完成）
                  </Typography>
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
              >
                保存评估
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                连接上级
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

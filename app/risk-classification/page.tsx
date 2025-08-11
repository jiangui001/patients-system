import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

const riskData = [
  { label: "高风险患者", count: 10, color: "#f44336" }, // 红色
  { label: "中风险患者", count: 20, color: "#ff9800" }, // 橙色
  { label: "低风险患者", count: 30, color: "#4caf50" }, // 绿色
];

export default function RiskClassification() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        风险分类
      </Typography>
      <Grid container spacing={4} marginTop={"48px"}>
        {riskData.map((risk) => (
          <Grid size={{ xs: 12, md: 4 }} key={risk.label}>
            <Card
              sx={{
                backgroundColor: risk.color,
                color: "#fff",
                minHeight: 180,
                boxShadow: 3,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  align="center"
                  sx={{ mb: 2 }}
                >
                  {risk.label}
                </Typography>
                <Typography variant="h3" align="center">
                  {risk.count}
                </Typography>
                <Typography variant="body2" align="center">
                  患者数量
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

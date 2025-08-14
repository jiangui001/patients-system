"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
} from "@mui/material";

export default function RecoveryAdvice() {
  const [advice, setAdvice] = useState(
    "1. 关注患侧手部精细活动，适当结合患者兴趣爱好，采用手工活动。\n2. 针对认知功能下降问题，关注记忆和视空间能力。\n3. 结合智能设备，提升训练反馈。\n4. 将日常生活场景适当迁移，融入训练。\n5. 规律监测血压，遵医嘱服药，避免情绪激动和过度劳累。\n6. 定期复诊，动态评估功能恢复情况，及时调整康复计划。"
  );

  const handleSave = () => {
    // TODO: 保存到后端或本地
    alert("康复建议已保存！");
  };

  return (
    <Box sx={{ p: 4, maxWidth: 700, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        张某康复建议
      </Typography>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              label="康复建议"
              value={advice}
              onChange={(e) => setAdvice(e.target.value)}
              multiline
              minRows={8}
              fullWidth
              variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={handleSave}>
              保存
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

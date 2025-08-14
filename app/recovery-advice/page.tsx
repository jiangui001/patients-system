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
    "1. 保持规律服药，监测血压。\n2. 建议每日进行上肢、手部、下肢康复训练。\n3. 适当进行唱歌、手工等兴趣活动，丰富生活。\n4. 注意情绪管理，避免激动。\n5. 家属协助日常生活，鼓励自理。\n6. 定期复诊，关注功能恢复。"
  );

  const handleSave = () => {
    // TODO: 保存到后端或本地
    alert("康复建议已保存！");
  };

  return (
    <Box sx={{ p: 4, maxWidth: 700, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        张某某康复建议
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

"use client";
import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import PatientTransferDialog from "./PatientTransferDialog";

const Header = () => {
  const [openTransferDialog, setOpenTransferDialog] = React.useState(false);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    // Handle profile menu open
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            智能康复系统
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 1 new notifications"
              color="inherit"
              onClick={() => {
                setOpenTransferDialog(true);
              }}
            >
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <PatientTransferDialog
        open={openTransferDialog}
        patientInfo={{
          姓名: "张某",
          性别: "女",
          年龄: 65,
          爱好: "唱歌、手工",
          家庭情况: "育有一子一女，女儿街道办工作人员，儿子外出务工",
          photoUrl: "/avatars/avatars.png",
        }}
        medicalHistory={{
          现病史:
            "2月前患者情绪激动后突感右侧肢体无力、伴头是，临床诊断为脑出血。",
          既往病史: "高血压病史10余年，未规律丢服药。",
          功能情况:
            "肌张力正常；Brunnstrom分期上肢V期，手IV期，下肢V期；berg评分48分，平衡功能良好；日常生活活动能力评分90分，基础性日常生活自理能力良好。",
        }}
        transferDetail={{
          接送时间: "2025-08-20",
          接送人员: "治疗师小玉",
          接送方式: "自行前往",
        }}
        onClose={() => setOpenTransferDialog(false)}
      />
    </>
  );
};
export default Header;

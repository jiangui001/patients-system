import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import {
  Box,
  CssBaseline,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import EmergencyIcon from "@mui/icons-material/Emergency";
import ArchiveIcon from "@mui/icons-material/Archive";
import Header from "./Header";

const drawerWidth = 240;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "智能康复系统",
  description: "智能康复系统",
};

const navData = [
  { label: "风险分类", href: "/risk-classification", icon: <EmergencyIcon /> },
  { label: "档案更新", href: "/patient-archive-update", icon: <ArchiveIcon /> },
  { label: "个体方案", href: "/patients", icon: <InboxIcon /> },
  { label: "回访记录", href: "/patients", icon: <InboxIcon /> },
  { label: "患者列表", href: "/patients", icon: <InboxIcon /> },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box className="flex">
      <CssBaseline />

      <Header />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {navData.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component="a" href={item.href}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      <Box className="flex-1">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

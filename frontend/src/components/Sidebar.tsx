import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import LogoutIcon from "@mui/icons-material/Logout";

interface Props {
  logout: () => void;
}

function Sidebar({ logout }: Props) {
  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        bgcolor: "#1976d2",
        color: "white",
        p: 2,
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mb: 4 }}
      >
        Task Manager
      </Typography>

      <List>

        <ListItemButton sx={{ color: "white" }}>
          <ListItemIcon sx={{ color: "white" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton sx={{ color: "white" }}>
          <ListItemIcon sx={{ color: "white" }}>
            <TaskIcon />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>

        <ListItemButton
          sx={{ color: "white" }}
          onClick={logout}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>

      </List>
    </Box>
  );
}

export default Sidebar;
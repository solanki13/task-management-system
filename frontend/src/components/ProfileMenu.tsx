import { useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

function ProfileMenu() {

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

 const handleProfile = () => {
     window.location.href = "/profile";
 };

  const handleSettings = () => {
    alert("Settings page coming soon.");
    handleClose();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Avatar>P</Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleProfile}>
          Profile
        </MenuItem>

        <MenuItem onClick={handleSettings}>
          Settings
        </MenuItem>

        <MenuItem onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default ProfileMenu;
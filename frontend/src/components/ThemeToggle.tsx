import { useContext } from "react";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { ColorModeContext } from "../context/ThemeContext";

function ThemeToggle() {

  const { toggleColorMode } =
    useContext(ColorModeContext);

  return (
    <IconButton
      color="inherit"
      onClick={toggleColorMode}
    >
      <DarkModeIcon />
    </IconButton>
  );
}

export default ThemeToggle;
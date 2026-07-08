import { Box, Button, Typography } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import ProfileMenu from "./ProfileMenu";

interface NavbarProps {
  onLogout: () => void;
  onAddTask: () => void;
  onExport: () => void;
  onExportPDF: () => void;
}

function Navbar({ onLogout, onAddTask, onExport, onExportPDF }: NavbarProps) {
  return (
    <Box sx={{ mb: 4 }}>

      <Typography
          variant="h3"
          sx={{ fontWeight: "bold" }}
      >
        My Tasks
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          color="error"
          onClick={onLogout}
        >
          Logout
        </Button>

        <Button
          variant="contained"
          onClick={onAddTask}
        >
          Add Task
        </Button>
         <Button
             variant="outlined"
             onClick={onExport}
         >
             Export CSV
         </Button>
         <Button
             variant="outlined"
             onClick={onExportPDF}
         >
             Export PDF
         </Button>
        <ThemeToggle />
        <ProfileMenu />
      </Box>

    </Box>
  );
}

export default Navbar;
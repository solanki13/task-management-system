import { Box, MenuItem, TextField } from "@mui/material";

interface Props {
  status: string;
  priority: string;
  setStatus: (value: string) => void;
  setPriority: (value: string) => void;
}

function FilterBar({
  status,
  priority,
  setStatus,
  setPriority,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 3,
      }}
    >
      <TextField
        select
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        sx={{ width: 200 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="TODO">TODO</MenuItem>
        <MenuItem value="IN_PROGRESS">IN PROGRESS</MenuItem>
        <MenuItem value="DONE">DONE</MenuItem>
      </TextField>

      <TextField
        select
        label="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        sx={{ width: 200 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="LOW">LOW</MenuItem>
        <MenuItem value="MEDIUM">MEDIUM</MenuItem>
        <MenuItem value="HIGH">HIGH</MenuItem>
      </TextField>
    </Box>
  );
}

export default FilterBar;
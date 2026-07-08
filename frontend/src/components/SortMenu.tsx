import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  sortBy: string;
  setSortBy: (value: string) => void;
}

function SortMenu({ sortBy, setSortBy }: Props) {
  return (
    <FormControl sx={{ width: 220, mb: 3 }}>
      <InputLabel>Sort By</InputLabel>

      <Select
        value={sortBy}
        label="Sort By"
        onChange={(e) => setSortBy(e.target.value)}
      >
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="priorityHigh">Priority (High → Low)</MenuItem>
        <MenuItem value="priorityLow">Priority (Low → High)</MenuItem>
        <MenuItem value="titleAZ">Title (A → Z)</MenuItem>
        <MenuItem value="titleZA">Title (Z → A)</MenuItem>
        <MenuItem value="dueDate">Due Date</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortMenu;
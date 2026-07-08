import { Box, TextField } from "@mui/material";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

function SearchBar({ search, setSearch }: Props) {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <TextField
        fullWidth
        label="Search Tasks"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
}

export default SearchBar;
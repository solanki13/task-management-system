import { Pagination, Box } from "@mui/material";

interface Props {
  page: number;
  count: number;
  onChange: (page: number) => void;
}

function PaginationBar({
  page,
  count,
  onChange,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <Pagination
        page={page}
        count={count}
        color="primary"
        onChange={(_, value) => onChange(value)}
      />
    </Box>
  );
}

export default PaginationBar;
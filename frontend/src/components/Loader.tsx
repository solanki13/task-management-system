import { Box, CircularProgress } from "@mui/material";

function Loader() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
            }}
        >
            <CircularProgress size={60} />
        </Box>
    );
}

export default Loader;
import { Box } from "@mui/material";
import RegisterForm from "../components/RegisterForm";

function Register() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                bgcolor: "#f5f5f5",
            }}
        >
            <RegisterForm />
        </Box>
    );
}

export default Register;
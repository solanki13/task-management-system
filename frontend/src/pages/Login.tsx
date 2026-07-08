import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";


function Login() {
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
            <LoginForm />
        </Box>
    );
}

export default Login;
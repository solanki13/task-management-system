import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { loginUser } from "../services/auth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setSuccess("");
      setError("");

      const response = await loginUser({
        email,
        password,
      });

      localStorage.setItem(
          "token",
          response.accessToken
      );

      setSuccess("Login Successful!");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid Email or Password");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        width: 400,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        Login
      </Typography>

      {success && (
        <Alert severity="success">
          {success}
        </Alert>
      )}

      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Paper>
  );
}

export default LoginForm;
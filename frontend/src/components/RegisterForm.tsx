import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { registerUser } from "../services/auth";

function RegisterForm() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setError("");
      setMessage("");

      await registerUser({
        fullName,
        email,
        password,
      });

      setMessage("Registration Successful! Redirecting to Login...");

      // Redirect to Login page after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (err: any) {
      console.error(err);

      // Backend returned an error message
      const backendMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "";

      if (
        backendMessage.toLowerCase().includes("already") ||
        backendMessage.toLowerCase().includes("exists") ||
        err.response?.status === 409
      ) {
        setError("User already registered. Please login.");
      } else {
        setError(backendMessage || "Registration Failed");
      }
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
        Register
      </Typography>

      {message && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {message}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        margin="normal"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
        onClick={handleRegister}
      >
        Register
      </Button>
    </Paper>
  );
}

export default RegisterForm;
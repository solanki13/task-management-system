import { useState } from "react";
import {
  Button,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { registerUser } from "../services/auth";

function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setError("");
      setMessage("");

      const response = await registerUser({
        fullName,
        email,
        password,
      });

      localStorage.setItem("token", response.accessToken);

      setMessage("Registration Successful!");
    } catch (err: any) {
      setError("Registration Failed");
      console.error(err);
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
        <Alert severity="success">
          {message}
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
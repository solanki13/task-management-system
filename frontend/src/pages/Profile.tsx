import {Box, Button, Paper, TextField, Typography } from "@mui/material";
import ProfileImageUpload from "../components/ProfileImageUpload";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
function Profile() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {

        const savedName = localStorage.getItem("profileName");
        const savedEmail = localStorage.getItem("profileEmail");

        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);

    }, []);

    const saveProfile = () => {

        localStorage.setItem("profileName", name);
        localStorage.setItem("profileEmail", email);

        toast.success("Profile Updated Successfully!");

    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mt: 5,
            }}
        >
            <Paper sx={{ p: 4, width: 450 }}>

                <Box sx={{ textAlign: "center" }}>

                    <ProfileImageUpload />

                    <Typography variant="h4">
                        My Profile
                    </Typography>

                </Box>

                <TextField
                    fullWidth
                    label="Full Name"
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={saveProfile}
                >
                    Save Changes
                </Button>

            </Paper>
        </Box>
    );
}

export default Profile;
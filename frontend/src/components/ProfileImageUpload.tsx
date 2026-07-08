import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Avatar, Box, Typography } from "@mui/material";

function ProfileImageUpload() {

    const [image, setImage] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {

        const file = acceptedFiles[0];

        if (file) {

            const imageUrl = URL.createObjectURL(file);

            setImage(imageUrl);

        }

    }, []);

    const { getRootProps, getInputProps } = useDropzone({

        accept: {
            "image/*": [],
        },

        multiple: false,

        onDrop,

    });

    return (

        <Box
            {...getRootProps()}
            sx={{
                border: "2px dashed #1976d2",
                borderRadius: 2,
                p: 3,
                textAlign: "center",
                cursor: "pointer",
                mb: 3,
            }}
        >

            <input {...getInputProps()} />

            <Avatar
                src={image || ""}
                sx={{
                    width: 100,
                    height: 100,
                    mx: "auto",
                    mb: 2,
                }}
            />

            <Typography>

                {image
                    ? "Click to change profile picture"
                    : "Drag & Drop or Click to Upload"}

            </Typography>

        </Box>

    );

}

export default ProfileImageUpload;
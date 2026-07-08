import { Grid, Paper, Typography } from "@mui/material";
import type { Task } from "../types/Task";

interface Props {
    tasks: Task[];
}

function Statistics({ tasks }: Props) {

    const total = tasks.length;

    const completed = tasks.filter(
        t => t.status === "COMPLETED"
    ).length;

    const pending = tasks.filter(
        t => t.status !== "COMPLETED"
    ).length;

    const highPriority = tasks.filter(
        t => t.priority === "HIGH"
    ).length;

    const cards = [
        {
            title: "Total Tasks",
            value: total,
            color: "#1976d2",
        },
        {
            title: "Completed",
            value: completed,
            color: "#2e7d32",
        },
        {
            title: "Pending",
            value: pending,
            color: "#ed6c02",
        },
        {
            title: "High Priority",
            value: highPriority,
            color: "#d32f2f",
        },
    ];

    return (
        <Grid container spacing={3} sx={{ mb: 4 }}>

            {cards.map((card) => (

               <Grid
                   size={{
                       xs: 12,
                       sm: 6,
                       md: 3,
                   }}
                   key={card.title}
               >

                    <Paper
                        elevation={4}
                        sx={{
                            p: 3,
                            textAlign: "center",
                            borderTop: `5px solid ${card.color}`,
                        }}
                    >

                        <Typography color="text.secondary">
                            {card.title}
                        </Typography>

                       <Typography
                           variant="h3"
                           sx={{ fontWeight: "bold" }}
                       >
                            {card.value}
                        </Typography>

                    </Paper>

                </Grid>

            ))}

        </Grid>
    );
}

export default Statistics;
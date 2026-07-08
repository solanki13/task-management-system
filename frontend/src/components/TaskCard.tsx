import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Chip,
  Stack,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type { Task } from "../types/Task";

interface Props {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
}

function TaskCard({ task, onDelete, onEdit }: Props) {
    const getDueDateColor = () => {
      if (!task.dueDate) return "default";

      const today = new Date();
      const due = new Date(task.dueDate);

      if (due < today) return "error";

      const diff =
        (due.getTime() - today.getTime()) /
        (1000 * 60 * 60 * 24);

      if (diff <= 2) return "warning";

      return "success";
    };
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >

          {/* Left Side */}
         <Typography
             variant="h3"
             sx={{ fontWeight: "bold" }}
         >
            {task.title}
          </Typography>

          {/* Right Side */}
          <Box>

            <IconButton
              color="primary"
              onClick={() => onEdit(task)}
            >
              <EditIcon />
            </IconButton>

            <IconButton
              color="error"
              onClick={() => onDelete(task.id)}
            >
              <DeleteIcon />
            </IconButton>

          </Box>

        </Box>

        <Typography sx={{ mb: 2 }}>
          {task.description}
        </Typography>

        <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 2 }}
        >

          <Chip
            label={task.priority}
            color="warning"
          />

          <Chip
            label={task.status}
            color="success"
          />
          <Chip
              label={
                  task.dueDate
                      ? task.dueDate
                      : "No Due Date"
              }
              color={getDueDateColor()}
          />

        </Stack>

      </CardContent>
    </Card>
  );
}

export default TaskCard;
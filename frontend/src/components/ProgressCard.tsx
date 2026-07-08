import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
} from "@mui/material";
import type { Task } from "../types/Task";

interface Props {
  tasks: Task[];
}

function ProgressCard({ tasks }: Props) {

  const completed = tasks.filter(
    t => t.status === "COMPLETED"
  ).length;

  const progress =
    tasks.length === 0
      ? 0
      : (completed / tasks.length) * 100;

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>

        <Typography
          variant="h6"
          gutterBottom
        >
          Project Progress
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 12,
            borderRadius: 10,
          }}
        />

        <Typography
          sx={{ mt: 2 }}
        >
          {completed} of {tasks.length} Tasks Completed
        </Typography>

      </CardContent>
    </Card>
  );
}

export default ProgressCard;
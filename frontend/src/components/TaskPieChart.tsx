import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { Card, CardContent, Typography } from "@mui/material";
import type { Task } from "../types/Task";

interface Props {
  tasks: Task[];
}

function TaskPieChart({ tasks }: Props) {

  const data = [
    {
      name: "TODO",
      value: tasks.filter(t => t.status === "TODO").length,
    },
    {
      name: "IN PROGRESS",
      value: tasks.filter(t => t.status === "IN_PROGRESS").length,
    },
    {
      name: "COMPLETED",
      value: tasks.filter(t => t.status === "COMPLETED").length,
    },
  ];

  const COLORS = [
    "#f57c00",
    "#1976d2",
    "#2e7d32",
  ];

  return (
    <Card sx={{ mt: 4, mb: 4 }}>
      <CardContent>

        <Typography
          variant="h6"
          gutterBottom
        >
          Task Status Distribution
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />

          </PieChart>
        </ResponsiveContainer>

      </CardContent>
    </Card>
  );
}

export default TaskPieChart;
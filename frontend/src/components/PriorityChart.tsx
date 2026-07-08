import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent, Typography } from "@mui/material";
import type { Task } from "../types/Task";

interface Props {
  tasks: Task[];
}

function PriorityChart({ tasks }: Props) {

  const data = [
    {
      priority: "HIGH",
      count: tasks.filter(t => t.priority === "HIGH").length,
    },
    {
      priority: "MEDIUM",
      count: tasks.filter(t => t.priority === "MEDIUM").length,
    },
    {
      priority: "LOW",
      count: tasks.filter(t => t.priority === "LOW").length,
    },
  ];

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>

        <Typography variant="h6" gutterBottom>
          Tasks by Priority
        </Typography>

       <ResponsiveContainer width="100%" height={180}>
           <BarChart data={data}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="priority" />
               <YAxis />
               <Tooltip />
               <Bar
                   dataKey="count"
                   fill="#1976d2"
                   barSize={35}
               />
           </BarChart>
       </ResponsiveContainer>

      </CardContent>
    </Card>
  );
}

export default PriorityChart;
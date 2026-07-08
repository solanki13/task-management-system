import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

import { updateTask } from "../services/task";
import type { Task } from "../types/Task";

interface Props {
  open: boolean;
  task: Task | null;
  onClose: () => void;
  refreshTasks: () => void;
}

function EditTaskDialog({
  open,
  task,
  onClose,
  refreshTasks,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] =
    useState<Task["priority"]>("MEDIUM");
  const [status, setStatus] =
    useState<Task["status"]>("TODO");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
      setStatus(task.status);
    }
  }, [task]);

  const handleUpdate = async () => {
    if (!task) return;

    try {
      await updateTask(task.id, {
        title,
        description,
        priority,
        status,
      });

      toast.success("Task Updated");

      refreshTasks();
      onClose();

    } catch (error) {
      console.error(error);
      toast.error("Failed to update task");
    }
  };

  if (!task) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Task</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          fullWidth
          margin="normal"
          multiline
          rows={3}
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <TextField
          select
          fullWidth
          margin="normal"
          label="Priority"
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as Task["priority"])
          }
        >
          <MenuItem value="LOW">LOW</MenuItem>
          <MenuItem value="MEDIUM">MEDIUM</MenuItem>
          <MenuItem value="HIGH">HIGH</MenuItem>
        </TextField>

        <TextField
          select
          fullWidth
          margin="normal"
          label="Status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as Task["status"])
          }
        >
          <MenuItem value="TODO">TODO</MenuItem>
          <MenuItem value="IN_PROGRESS">IN PROGRESS</MenuItem>
          <MenuItem value="COMPLETED">COMPLETED</MenuItem>
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="contained"
          onClick={handleUpdate}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditTaskDialog;
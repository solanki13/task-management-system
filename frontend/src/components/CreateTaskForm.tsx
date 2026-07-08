import { useState } from "react";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  Button,
  DialogActions,
} from "@mui/material";
import api from "../services/api";

interface Props {
  open: boolean;
  handleClose: () => void;
  refreshTasks: () => void;
}

function CreateTaskForm({
  open,
  handleClose,
  refreshTasks,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [dueDate, setDueDate] = useState("");

  const createTask = async () => {
    try {
      await api.post("/tasks", {
        title,
        description,
        priority,
        dueDate: dueDate + "T00:00:00",
      });

      setTitle("");
      setDescription("");
      setPriority("MEDIUM");
      setDueDate("");

      handleClose();
      refreshTasks();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create task");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Create Task</DialogTitle>

      <DialogContent>

        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="Description"
          fullWidth
          margin="normal"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <TextField
          select
          label="Priority"
          fullWidth
          margin="normal"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <MenuItem value="LOW">LOW</MenuItem>
          <MenuItem value="MEDIUM">MEDIUM</MenuItem>
          <MenuItem value="HIGH">HIGH</MenuItem>
        </TextField>

        <TextField
          type="date"
          fullWidth
          margin="normal"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>

        <Button
          variant="contained"
          onClick={createTask}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateTaskForm;
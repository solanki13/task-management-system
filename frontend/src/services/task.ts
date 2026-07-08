import api from "./api";
import type { Task } from "../types/Task";

export const getTasks = async () => {
    const response = await api.get("/tasks");
    return response.data;
};

export const deleteTask = async (id: number) => {
    await api.delete(`/tasks/${id}`);
};

export const createTask = async (task: Partial<Task>) => {
    const response = await api.post("/tasks", task);
    return response.data;
};

export const updateTask = async (id: number, task: Partial<Task>) => {
    const response = await api.put(`/tasks/${id}`, task);
    return response.data;
};
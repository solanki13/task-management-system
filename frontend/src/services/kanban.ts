import { updateTask } from "./task";

export const moveTask = async (task: any, newStatus: string) => {
    return await updateTask(task.id, {
        ...task,
        status: newStatus,
    });
};
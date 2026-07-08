import { saveAs } from "file-saver";

export const exportTasks = (tasks: any[]) => {

    const headers = [
        "Title",
        "Description",
        "Priority",
        "Status",
        "Due Date",
    ];

    const rows = tasks.map(task => [
        task.title,
        task.description,
        task.priority,
        task.status,
        task.dueDate,
    ]);

    const csvContent = [
        headers.join(","),
        ...rows.map(row => row.join(",")),
    ].join("\n");

    const blob = new Blob(
        [csvContent],
        { type: "text/csv;charset=utf-8;" }
    );

    saveAs(blob, "tasks.csv");

};
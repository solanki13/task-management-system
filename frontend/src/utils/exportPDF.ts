import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportPDF = (tasks: any[]) => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Task Manager Report", 14, 20);

    autoTable(doc, {
        startY: 30,
        head: [[
            "Title",
            "Description",
            "Priority",
            "Status",
            "Due Date",
        ]],
        body: tasks.map(task => [
            task.title,
            task.description,
            task.priority,
            task.status,
            task.dueDate || "-",
        ]),
    });

    doc.save("tasks-report.pdf");

};
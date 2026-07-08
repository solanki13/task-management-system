import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import TaskCard from "../components/TaskCard";
import CreateTaskForm from "../components/CreateTaskForm";
import EditTaskDialog from "../components/EditTaskDialog";
import FilterBar from "../components/FilterBar";
import Statistics from "../components/Statistics";
import Sidebar from "../components/Sidebar";
import ProgressCard from "../components/ProgressCard";
import TaskPieChart from "../components/TaskPieChart";
import PriorityChart from "../components/PriorityChart";
import KanbanBoard from "../components/KanbanBoard";
import Loader from "../components/Loader";
import PaginationBar from "../components/PaginationBar";
import SortMenu from "../components/SortMenu";

import { getTasks, deleteTask } from "../services/task";
import { exportTasks } from "../utils/exportTasks";
import { exportPDF } from "../utils/exportPDF";
import type { Task } from "../types/Task";

function Dashboard() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const [statusFilter, setStatusFilter] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");

    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const tasksPerPage = 5;

    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {

        setLoading(true);

        try {

            const data = await getTasks();
            setTasks(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };

    const handleEdit = (task: Task) => {

        setSelectedTask(task);
        setEditOpen(true);

    };

    const handleDelete = async (id: number) => {

        if (!window.confirm("Delete this task?")) {
            return;
        }

        try {

            await deleteTask(id);
            loadTasks();

        } catch (error) {

            console.error(error);

        }
    };

    const logout = () => {

        localStorage.removeItem("token");
        window.location.href = "/";

    };

    const filteredTasks = tasks.filter((task) => {

        const searchMatch =
            task.title.toLowerCase().includes(search.toLowerCase());

        const statusMatch =
            statusFilter === "" || task.status === statusFilter;

        const priorityMatch =
            priorityFilter === "" || task.priority === priorityFilter;

        return searchMatch && statusMatch && priorityMatch;

    });

    const sortedTasks = [...filteredTasks];

    switch (sortBy) {

        case "priorityHigh":
            sortedTasks.sort((a, b) => {
                const order = {
                    HIGH: 3,
                    MEDIUM: 2,
                    LOW: 1,
                };

                return (
                    order[b.priority] -
                    order[a.priority]
                );
            });
            break;

        case "priorityLow":
            sortedTasks.sort((a, b) => {
                const order = {
                    HIGH: 3,
                    MEDIUM: 2,
                    LOW: 1,
                };

                return (
                    order[a.priority] -
                    order[b.priority]
                );
            });
            break;

        case "titleAZ":
            sortedTasks.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            break;

        case "titleZA":
            sortedTasks.sort((a, b) =>
                b.title.localeCompare(a.title)
            );
            break;

        case "dueDate":
            sortedTasks.sort(
                (a, b) =>
                    new Date(a.dueDate || "9999-12-31").getTime() -
                    new Date(b.dueDate || "9999-12-31").getTime()
            );
            break;

        default:
            break;
    }

    const totalPages = Math.ceil(
        filteredTasks.length / tasksPerPage
    );

    const paginatedTasks = sortedTasks.slice(
        (page - 1) * tasksPerPage,
        page * tasksPerPage
    );

    if (loading) {
        return <Loader />;
    }

    return (

        <Box sx={{ display: "flex" }}>

            <Sidebar logout={logout} />

            <Box
                sx={{
                    ml: "250px",
                    width: "100%",
                    p: 4,
                }}
            >

                <Navbar
                    onLogout={logout}
                    onAddTask={() => setOpen(true)}
                    onExport={() => exportTasks(tasks)}
                    onExportPDF={() => exportPDF(tasks)}
                />

                <Statistics tasks={tasks} />

                <ProgressCard tasks={tasks} />

                <TaskPieChart tasks={tasks} />

                <PriorityChart tasks={tasks} />

                <KanbanBoard tasks={tasks} />

                <SortMenu
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <FilterBar
                    status={statusFilter}
                    priority={priorityFilter}
                    setStatus={setStatusFilter}
                    setPriority={setPriorityFilter}
                />

                {filteredTasks.length === 0 ? (

                    <Box
                        sx={{
                            mt: 4,
                            textAlign: "center",
                            fontSize: 20,
                        }}
                    >
                        No tasks found.
                    </Box>

                ) : (

                    paginatedTasks.map((task) => (

                        <TaskCard
                            key={task.id}
                            task={task}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />

                    ))

                )}

                <PaginationBar
                    page={page}
                    count={totalPages}
                    onChange={setPage}
                />

                <CreateTaskForm
                    open={open}
                    handleClose={() => setOpen(false)}
                    refreshTasks={loadTasks}
                />

                <EditTaskDialog
                    open={editOpen}
                    task={selectedTask}
                    onClose={() => setEditOpen(false)}
                    refreshTasks={loadTasks}
                />

            </Box>

        </Box>

    );
}

export default Dashboard;
import { moveTask } from "../services/kanban";
import type { Task } from "../types/Task";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
} from "@mui/material";

interface Props {
  tasks: Task[];
}

const columns = [
  { id: "TODO", title: "TODO" },
  { id: "IN_PROGRESS", title: "IN PROGRESS" },
  { id: "COMPLETED", title: "COMPLETED" },
];

function KanbanBoard({ tasks }: Props) {

    const handleDragEnd = async (result: any) => {

        if (!result.destination) return;

        const task = tasks.find(
            (t) => t.id.toString() === result.draggableId
        );

        if (!task) return;

        if (task.status === result.destination.droppableId)
            return;

        await moveTask(task, result.destination.droppableId);

        window.location.reload();
    };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 4,
        }}
      >

        {columns.map((column) => (

          <Droppable
            droppableId={column.id}
            key={column.id}
          >
            {(provided) => (

              <Paper
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                    flex: 1,
                    p: 2,
                    bgcolor: "#f8f9fa",
                    borderRadius: 2,
                    alignSelf: "flex-start",
                }}
              >

                <Typography
                  variant="h6"
                  sx={{ mb: 2 }}
                >
                  {column.title}
                </Typography>

                {tasks
                  .filter(
                    task => task.status === column.id
                  )
                  .map((task, index) => (

                    <Draggable
                      draggableId={task.id.toString()}
                      index={index}
                      key={task.id}
                    >
                      {(provided) => (

                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          sx={{ mb: 2 }}
                        >
                          <CardContent>

                            <Typography
                              variant="h6"
                            >
                              {task.title}
                            </Typography>

                            <Typography>
                              {task.description}
                            </Typography>

                          </CardContent>

                        </Card>

                      )}
                    </Draggable>

                  ))}

                {provided.placeholder}

              </Paper>

            )}
          </Droppable>

        ))}

      </Box>

    </DragDropContext>
  );
}

export default KanbanBoard;
package com.taskmanager.dto.request;

import com.taskmanager.model.enums.Priority;
import com.taskmanager.model.enums.TaskStatus;
import lombok.Data;

import java.time.LocalDate;

@Data
public class UpdateTaskRequest {

    private String title;

    private String description;

    private Priority priority;

    private TaskStatus status;

    private LocalDate dueDate;
}
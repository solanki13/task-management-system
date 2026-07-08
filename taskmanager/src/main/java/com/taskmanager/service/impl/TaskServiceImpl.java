
package com.taskmanager.service.impl;

import com.taskmanager.dto.request.CreateTaskRequest;
import com.taskmanager.dto.request.UpdateTaskRequest;
import com.taskmanager.dto.response.TaskResponse;
import com.taskmanager.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.taskmanager.model.entity.Task;
import com.taskmanager.model.entity.User;
import com.taskmanager.model.enums.TaskStatus;
import com.taskmanager.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import com.taskmanager.exception.ResourceNotFoundException;
import com.taskmanager.websocket.TaskMessage;
import com.taskmanager.websocket.WebSocketService;

import java.time.LocalDateTime;
import java.util.stream.Collectors;
import com.taskmanager.service.TaskService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final WebSocketService webSocketService;

    @Override
    public TaskResponse createTask(CreateTaskRequest request) {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Task task = Task.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .priority(request.getPriority())
                .dueDate(request.getDueDate())
                .status(TaskStatus.TODO)
                .createdAt(LocalDateTime.now())
                .user(user)
                .build();

        Task savedTask = taskRepository.save(task);

        webSocketService.send(
                TaskMessage.builder()
                        .type("TASK_CREATED")
                        .taskId(savedTask.getId())
                        .title(savedTask.getTitle())
                        .status(savedTask.getStatus().name())
                        .updatedBy(user.getFullName())
                        .build()
        );

        return TaskResponse.builder()
                .id(savedTask.getId())
                .title(savedTask.getTitle())
                .description(savedTask.getDescription())
                .priority(savedTask.getPriority())
                .status(savedTask.getStatus())
                .dueDate(savedTask.getDueDate())
                .build();
    }

    @Override
    public List<TaskResponse> getAllTasks() {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        return taskRepository.findByUser(user)
                .stream()
                .map(task -> TaskResponse.builder()
                        .id(task.getId())
                        .title(task.getTitle())
                        .description(task.getDescription())
                        .priority(task.getPriority())
                        .status(task.getStatus())
                        .dueDate(task.getDueDate())
                        .build())
                .collect(Collectors.toList());
    }
    @Override
    public TaskResponse getTaskById(Long id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found"));

        return TaskResponse.builder()
                .id(task.getId())
                .title(task.getTitle())
                .description(task.getDescription())
                .priority(task.getPriority())
                .status(task.getStatus())
                .dueDate(task.getDueDate())
                .build();
    }

    @Override
    public TaskResponse updateTask(Long id, UpdateTaskRequest request) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found"));

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setPriority(request.getPriority());
        task.setStatus(request.getStatus());
        task.setDueDate(request.getDueDate());

        Task updatedTask = taskRepository.save(task);

        if (updatedTask.getUser() != null) {

            webSocketService.send(
                    TaskMessage.builder()
                            .type("TASK_UPDATED")
                            .taskId(updatedTask.getId())
                            .title(updatedTask.getTitle())
                            .status(updatedTask.getStatus().name())
                            .updatedBy(updatedTask.getUser().getFullName())
                            .build()
            );

        }

        return TaskResponse.builder()
                .id(updatedTask.getId())
                .title(updatedTask.getTitle())
                .description(updatedTask.getDescription())
                .priority(updatedTask.getPriority())
                .status(updatedTask.getStatus())
                .dueDate(updatedTask.getDueDate())
                .build();
    }

    @Override
    public void deleteTask(Long id) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found"));

        webSocketService.send(
                TaskMessage.builder()
                        .type("TASK_DELETED")
                        .taskId(task.getId())
                        .title(task.getTitle())
                        .status(task.getStatus().name())
                        .updatedBy(task.getUser().getFullName())
                        .build()
        );

        taskRepository.delete(task);
    }
}
package com.taskmanager.service.impl;

import com.taskmanager.dto.request.CreateCommentRequest;
import com.taskmanager.dto.response.CommentResponse;
import com.taskmanager.model.entity.Comment;
import com.taskmanager.model.entity.Task;
import com.taskmanager.model.entity.User;
import com.taskmanager.repository.CommentRepository;
import com.taskmanager.repository.TaskRepository;
import com.taskmanager.repository.UserRepository;
import com.taskmanager.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    @Override
    public CommentResponse addComment(
            Long taskId,
            CreateCommentRequest request) {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        Comment comment = Comment.builder()
                .message(request.getMessage())
                .createdAt(LocalDateTime.now())
                .user(user)
                .task(task)
                .build();

        Comment savedComment = commentRepository.save(comment);

        return CommentResponse.builder()
                .id(savedComment.getId())
                .message(savedComment.getMessage())
                .user(savedComment.getUser().getFullName())
                .createdAt(savedComment.getCreatedAt().toString())
                .build();
    }

    @Override
    public List<CommentResponse> getComments(Long taskId) {

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        return commentRepository.findByTask(task)
                .stream()
                .map(comment -> CommentResponse.builder()
                        .id(comment.getId())
                        .message(comment.getMessage())
                        .user(comment.getUser().getFullName())
                        .createdAt(comment.getCreatedAt().toString())
                        .build())
                .collect(Collectors.toList());
    }
}
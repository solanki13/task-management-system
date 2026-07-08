package com.taskmanager.controller;

import com.taskmanager.dto.request.CreateCommentRequest;
import com.taskmanager.dto.response.CommentResponse;
import com.taskmanager.service.CommentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/{taskId}")
    public CommentResponse addComment(
            @PathVariable Long taskId,
            @Valid @RequestBody CreateCommentRequest request) {

        return commentService.addComment(taskId, request);
    }

    @GetMapping("/{taskId}")
    public List<CommentResponse> getComments(
            @PathVariable Long taskId) {

        return commentService.getComments(taskId);
    }
}
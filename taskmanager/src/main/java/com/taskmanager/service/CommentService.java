package com.taskmanager.service;

import com.taskmanager.dto.request.CreateCommentRequest;
import com.taskmanager.dto.response.CommentResponse;

import java.util.List;

public interface CommentService {

    CommentResponse addComment(
            Long taskId,
            CreateCommentRequest request);

    List<CommentResponse> getComments(Long taskId);
}
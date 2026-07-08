package com.taskmanager.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CommentResponse {

    private Long id;

    private String message;

    private String user;

    private String createdAt;
}
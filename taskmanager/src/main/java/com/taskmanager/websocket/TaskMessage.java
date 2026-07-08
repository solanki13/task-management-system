package com.taskmanager.websocket;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TaskMessage {

    private String type;

    private Long taskId;

    private String title;

    private String status;

    private String updatedBy;
}
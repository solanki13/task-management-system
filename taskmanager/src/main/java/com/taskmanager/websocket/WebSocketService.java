package com.taskmanager.websocket;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WebSocketService {

    private final SimpMessagingTemplate messagingTemplate;

    public void send(TaskMessage message) {

        messagingTemplate.convertAndSend(
                "/topic/tasks",
                message
        );
    }
}
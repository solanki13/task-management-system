package com.taskmanager.repository;

import com.taskmanager.model.entity.Comment;
import com.taskmanager.model.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByTask(Task task);
}
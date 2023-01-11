package com.nghia.service;

import com.nghia.model.Student;

import java.util.List;

public interface IBlogService {
    List<Student> findAll();

    void create(Student blog);

    void update(Student blog);

    void delete(Integer id);

    Student findById(Integer id);

    List<Student> searchByName(String name);
}

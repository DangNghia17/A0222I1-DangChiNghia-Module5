package com.nghia.service;

import com.nghia.model.Student;
import com.nghia.repository.IBlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BlogService implements IBlogService {
    @Autowired
    private IBlogRepository blogRepository;

    @Override
    public List<Student> findAll() {
        return blogRepository.findAll();
    }

    @Override
    public void create(Student blog) {
        blogRepository.save(blog);
    }

    @Override
    public void update(Student blog) {
        blogRepository.save(blog);
    }

    @Override
    public void delete(Integer id) {
        blogRepository.deleteById(id);
    }

    @Override
    public Student findById(Integer id) {
        return blogRepository.findById(id).orElse(null);
    }

    @Override
    public List<Student> searchByName(String name) {
//        return blogRepository.searchByName("%" + name + "%");
        return blogRepository.findAllByNameBlogContaining(name);
    }
}

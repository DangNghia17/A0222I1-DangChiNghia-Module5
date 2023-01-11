package com.nghia.repository;

import com.nghia.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBlogRepository extends JpaRepository<Student,Integer> {
    @Query(value = "select * from blog where name like :name " , nativeQuery = true)
    List<Student> searchByName(@Param("name") String name );

    List<Student> findAllByNameBlogContaining(@Param("name") String name );

}

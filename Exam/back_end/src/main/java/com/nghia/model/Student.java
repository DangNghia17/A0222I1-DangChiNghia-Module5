package com.nghia.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;
    private String name;
    private String group;
    private String topic;
    private String email;
    private String phone;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;




}


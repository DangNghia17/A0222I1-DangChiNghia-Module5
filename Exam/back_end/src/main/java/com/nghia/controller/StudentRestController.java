package com.nghia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class StudentRestController {
    @Autowired
    SavingBookService savingBookService;
    @GetMapping("list")
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(savingBookService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<?> fetchData(@PathVariable Long id) {
        System.out.println(id);
        return new ResponseEntity<>(savingBookService.findById(id),HttpStatus.OK);
    }
}

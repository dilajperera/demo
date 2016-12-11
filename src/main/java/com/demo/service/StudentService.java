package com.demo.service;

import com.demo.domain.Student;
import com.demo.exception.SmsException;

import java.util.List;

public interface StudentService {

    List<Student> getAllStudents();

    Student save(Student student) throws SmsException;

    void delete(Long id);
}

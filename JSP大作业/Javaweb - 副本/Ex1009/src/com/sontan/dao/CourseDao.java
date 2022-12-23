package com.sontan.dao;

import com.sontan.Learning.Course;

import java.util.ArrayList;

public interface CourseDao {
    public int setCourse(Course course);
    public int insertCourse(Course course);
    public ArrayList<Course> viewCourse();
    public int deleteCourse(Course course);
}

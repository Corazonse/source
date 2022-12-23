package com.sontan.dao;

import com.sontan.Learning.Course;

import java.sql.*;
import java.util.ArrayList;

public class CourseDaoImpl implements CourseDao {
    Connection conn;
    public CourseDaoImpl() {
        conn =getConnection();
    }
    private Connection getConnection(){
        return DBHelper.getConnection("learndb","root","123456");
    }

    @Override
    public int setCourse(Course course) {
        if (conn==null){
            conn=getConnection();
        }
        String sql="UPDATE course SET name=?,teacher=?,credit=?,begin=?,duration=?,interlinkage=?,condition=?";
        PreparedStatement pstmt;
        int rs=0;
        try{
            pstmt=conn.prepareStatement(sql);
            pstmt.setString(1,course.getName());
            pstmt.setString(2,course.getTeacher());
            pstmt.setInt(3,course.getCredit());
            pstmt.setDate(4,(Date)course.getBegin());
            pstmt.setInt(5,course.getDuration());
            pstmt.setString(6,course.getInterlinkage());
            pstmt.setBoolean(7,course.isCondition());
            rs=pstmt.executeUpdate();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return rs;
    }

    @Override
    public int insertCourse(Course course) {
        if (conn==null){
            conn=getConnection();
        }
        String sql="INSERT INTO course(name,teacher,credit,begin,duration,interlinkage,condition) VALUES(?,?,?,?,?,?,?);";
        PreparedStatement pstmt;
        int rs=0;
        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1,course.getName());
            pstmt.setString(2,course.getTeacher());
            pstmt.setInt(3,course.getCredit());
            pstmt.setTime(4, (Time) course.getBegin());
            pstmt.setInt(5, course.getDuration());
            pstmt.setString(6,course.getInterlinkage());
            pstmt.setBoolean(7,course.isCondition());
            rs=pstmt.executeUpdate();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return rs;
    }

    @Override
    public ArrayList<Course> viewCourse(){
        ResultSet rs=null;
        if (conn==null){
            conn=getConnection();
        }
        String sql="select * from course";
        ArrayList<Course> list=new ArrayList<Course>();
        PreparedStatement pstmt;
        try {
            pstmt=conn.prepareStatement(sql);
            rs=pstmt.executeQuery();
            if(rs.next()){
                Course course=new Course();
                course.setName(rs.getString("name"));
                course.setTeacher(rs.getString("teacher"));
                course.setCredit(rs.getInt("credit"));
                course.setBegin(rs.getDate("begin"));
                course.setDuration(rs.getInt("duration"));
                course.setInterlinkage(rs.getString("interlinkage"));
                course.setCondition(rs.getBoolean("condition"));
                list.add(course);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    public int deleteCourse(Course course) {
        if (conn==null){
            conn=getConnection();
        }
        String sql="delete from course where name=?";
        int rs=0;
        PreparedStatement pstmt;
        try {
            pstmt=conn.prepareStatement(sql);
            pstmt.setString(1,course.getName());
            rs=pstmt.executeUpdate();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return rs;
    }

}


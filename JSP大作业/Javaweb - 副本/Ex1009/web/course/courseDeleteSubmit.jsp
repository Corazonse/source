<%@ page import="com.sontan.dao.CourseDao" %>
<%@ page import="com.sontan.dao.CourseDaoImpl" %>
<%@ page import="com.sontan.Learning.Course" %><%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/11/18
  Time: 11:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    CourseDao courseDao =new CourseDaoImpl();
    String name=request.getParameter("");
    Course course=new Course();
    course.setName(name);
    courseDao.deleteCourse(course);
%>
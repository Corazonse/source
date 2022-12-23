<%@ page import="com.sontan.dao.CourseDao" %>
<%@ page import="com.sontan.dao.CourseDaoImpl" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="com.sontan.Learning.Course" %><%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/11/18
  Time: 11:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    CourseDao courseDao=new CourseDaoImpl();
    ArrayList<Course> data=courseDao.viewCourse();
    for(Course course:data){
        course.getId();
        course.getName();
    }

%>

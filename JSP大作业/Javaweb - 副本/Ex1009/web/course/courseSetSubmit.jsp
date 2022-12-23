<%@ page import="com.sontan.dao.CourseDao" %>
<%@ page import="com.sontan.dao.CourseDaoImpl" %>
<%@ page import="java.util.Date" %>
<%@ page import="com.sontan.Learning.Course" %><%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/11/18
  Time: 10:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    CourseDao courseDao =new CourseDaoImpl();
    String name=request.getParameter("");
    String teacher=request.getParameter("");
    int credit=request.getParameter("");
    Date begin=request.getParameter("");
    int duration=request.getParameter("");;  //持续时间（周数）
    String interlinkage=request.getParameter("");   //链接
    boolean condition=request.getParameter("");

    Course course=new Course(name,teacher,credit,begin,duration,interlinkage,condition);
    courseDao.setCourse(course);

%>
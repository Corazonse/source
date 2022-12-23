<%@ page contentType="text/html;charset=UTF-8" language="Java" %>
<%@ page import="com.mysql.cj.protocol.Resultset" %>
<%@ page import="com.sontan.Learning.User" %>
<%@ page import="com.sontan.dao.UserDao" %>
<%@ page import="com.sontan.dao.UserDaoImpl" %>
%>
<%
    String username=request.getParameter("username");
    String password=request.getParameter("password");
    User user = new User();
    user.setUsername(username);
    user.setPassword(password);
    UserDao userDao = new UserDaoImpl();
    if(userDao.checkLogin(user)){
        session.setAttribute("username",username);
        response.sendRedirect("index.jsp");
    }else {
        response.sendRedirect("login.jsp?err=-1");
    }
%>
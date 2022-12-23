<%@ page import="entity.User" %>
<%@ page import="dao.UserDao" %>
<%@ page import="control.database.UserTable" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%
    String username=request.getParameter("username");
    String password=request.getParameter("password");


    User user = new User();
    user.setName(username);
    user.setPassword(password);
    UserDao userDao=new UserTable();
    if(userDao.checkLogin(user)){
        response.sendRedirect("index.jsp");

    }


%>

<%@ page import="entity.User" %>
<%@ page import="dao.UserDao" %>
<%@ page import="control.database.UserTable" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String id=request.getParameter("id");
    User user=new User();
    user.setId(Integer.valueOf(id));
    UserDao userDao= new UserTable();
    userDao.delUser(user);
    response.sendRedirect("user.jsp");
%>

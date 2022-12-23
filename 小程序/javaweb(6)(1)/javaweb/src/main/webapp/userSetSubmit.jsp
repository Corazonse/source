<%@ page import="entity.User" %>
<%@ page import="dao.UserDao" %>
<%@ page import="control.database.UserTable" %><%--
  Created by IntelliJ IDEA.
  User: 徐
  Date: 2022/12/15
  Time: 15:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String username=request.getParameter("username");
    String account=request.getParameter("account");
    String password=request.getParameter("password");
    String id = request.getParameter("uid");
    int uid=Integer.parseInt(id);
    User user = new User();
    UserDao userDao = new UserTable();
    user.setId(uid);
    user.setName(username);
    user.setAccount(account);
    user.setPassword(password);
    userDao.refUser(user);
    response.sendRedirect("user.jsp");
%>
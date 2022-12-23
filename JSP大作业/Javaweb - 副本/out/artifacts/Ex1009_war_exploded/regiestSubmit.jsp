<%@ page import="com.sontan.Learning.User" %>
<%@ page import="com.sontan.dao.UserDao" %>
<%@ page import="com.sontan.dao.UserDaoImpl" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    UserDao userDao=new UserDaoImpl();
    String username = request.getParameter("username");
    String password = request.getParameter("password");
    String confirmPwd = request.getParameter("confirmPassword");
    User user=new User();
    user.setPassword(password);
    user.setUsername(username);

    if(user.getUsername()==null || user.getUsername()=="" || user.getPassword()==null||user.getPassword()==""){
        response.sendRedirect("regiest.jsp?err=-1");
    }else
    if(!user.getPassword().equals(confirmPwd)){
        response.sendRedirect("regiest.jsp?err=-2");
    }else
    if(userDao.validateUsername(user)){
        response.sendRedirect("regiest.jsp?err=-3");
    }else
    if(userDao.insertUser(user)>=1){
        request.setAttribute("info","用户注册成功");
        response.sendRedirect("index.jsp");
    }else {
        response.sendRedirect("regiest.jsp?err=-4");
    }
%>
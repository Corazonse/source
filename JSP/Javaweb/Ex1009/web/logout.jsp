<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/10/31
  Time: 17:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="Java" %>
<%
    //注销用户
    //1.先清除值
    if (session.getAttribute("username") != null){
        session.removeAttribute("username");
    }
    //2.注销
    session.invalidate();
    //3.返回初始界面
    response.sendRedirect("index.jsp");
%>


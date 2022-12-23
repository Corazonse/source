<%@ page import="entity.Forum" %>
<%@ page import="dao.ForumDao" %>
<%@ page import="control.database.ForumTable" %><%--
  Created by IntelliJ IDEA.
  User: 徐
  Date: 2022/12/16
  Time: 15:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String id=request.getParameter("id");
    // Integer.valueOf(id)
    Forum forum=new Forum();
    forum.setId(Integer.valueOf(id));
    ForumDao forumDao=new ForumTable();
    forumDao.delForm(forum);
    response.sendRedirect("check.jsp");

%>

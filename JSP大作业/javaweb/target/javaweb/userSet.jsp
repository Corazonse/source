<%@ page import="entity.User" %>
<%@ page import="dao.UserDao" %>
<%@ page import="control.database.UserTable" %><%--
  Created by IntelliJ IDEA.
  User: 徐
  Date: 2022/12/15
  Time: 15:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>修改用户</title>
</head>
<body>
<%
    String id=request.getParameter("id");
    UserDao userDao=new UserTable();
    User user=userDao.selUser(Integer.valueOf(id));
%>
    <form action="userSetSubmit.jsp?uid=<%=user.getId()%>" method="post">
        <p>用户id：</p>
        <p><%=user.getId()%></p>

        <p>用户名</p>
        <input type="text" name="username" value=<%=user.getName()%>>

        <p>账号</p>
        <input type="text" name="account" value=<%=user.getAccount()%>>

        <P>密码</P>
        <input type="text" name="password" value=<%=user.getPassword()%>>

        <input type="submit" value="提交修改">
    </form>

</body>
</html>

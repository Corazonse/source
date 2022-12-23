<%@ page contentType="text/html;charset=UTF-8" language="Java" %>
<link rel="stylesheet" href="./css/header.css">
<header>
    <div class="left">
        <img src="./images/logo.gif">
        <p><span>2022年春学期</span>
            <span>当前用户:
                <%
                    if(session.getAttribute("username")!=null) {
                        out.print(session.getAttribute("username"));
                    }else{
                        out.print("guess");
                    }
                %>
            </span>
        </p>
    </div>
    <nav>
        <ul>
            <li><a href="index.jsp">首页</a></li>
            <li><a href="">在线学习</a></li>
            <li><a href="">作业管理</a></li>
            <li><a href="admin.jsp">后台管理</a></li>
            <li><a href="">关于我们</a></li>
            <% if(session.getAttribute("username")!=null)  { %>
            <li><a href="logout.jsp">退出</a></li>
            <% } else { %>
            <li><a href="login.jsp">登录</a></li>
            <% } %>

            <li><a href="regiest.jsp">注册</a></li>
        </ul>
    </nav>
    <div class="right">
        <img src="./images/head.gif">
    </div>
</header>

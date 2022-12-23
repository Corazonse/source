<%@ page contentType="text/html;charset=UTF-8" language="Java" %>
<html>
<head>
    <title> 系统注册</title>
    <link rel="stylesheet" href="./css/register.css">
</head>
<body>
<div id="container">
    <%@include file="common/header.jsp"%>
    <div  class="main">
        <div class="login">
            <div class="top">
                <img src="./images/quanx32.gif">
                <span>&nbsp;系统注册</span>
            </div>
            <div class="content">
                <form method="post" action="loginSubmit.jsp">
                    <p>
                        <span>用户名：</span>
                        <input type="text" name="username" class="inputtxt">
                    </p>
                    <p>
                        <span>密&nbsp;&nbsp;码：</span>
                        <input type="password" name="password" class="inputtxt">
                    </p>
                    <p>
                        <span>确认密码：</span>
                        <input type="password" name="password" class="inputtxt">
                    </p>
                    <p>
                        <span>邮&nbsp;&nbsp;箱：</span>
                        <input type="text" name="email" class="inputtxt">
                    </p>
                    <p>
                        <span>性&nbsp;&nbsp;别：</span>
                        男<input type="radio" name="sex" value="男"> 女<input type="radio" name="sex" value="女">
                    </p>
                    <p>
                        <input type="submit" value="注册"  class="registerbtn">
                    </p>
                </form>

                <%
                    if(request.getParameter("err")!=null) {
                        String err= request.getParameter("err");
                        if(err.equals("-1")) {
                            out.print("<p style='color:red;'>用户名或密码错误!</p>");
                        }else{
                            out.print("<p style='color:red;'>其他错误!</p>");
                        }
                    }
                %>
            </div>
        </div>
    </div>
    <%@include file="common/footer.jsp"%>
</div>
</body>
</html>

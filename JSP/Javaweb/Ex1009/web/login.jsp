<%@ page contentType="text/html;charset=UTF-8" language="Java" %>
<html>
<head>
    <title>系统登录</title>
    <link rel="stylesheet" href="./css/login.css">
</head>
<body>
<div id="container">
  <%@include file="common/header.jsp"%>
  <div  class="main">
    <div class="login">
        <div class="top">
            <img src="./images/quanx32.gif">
            <span>&nbsp;系统登录</span>
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
                </p><p>
                    <input type="submit" value="登录"  class="loginbtn">
                </p>
                <p>
                    <a href="./register.jsp">没有账号？前往注册</a>
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

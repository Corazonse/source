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
                    <input type="text" name="password" class="inputtxt">
                </p>
                <p>
                    <input type="submit" value="登录"  class="loginbtn">
                </p>
                <%
                    if(request.getParameter("err")!=null){
                        String err=request.getParameter("err");
                        if(err.equals("-1")){
                            out.print("<span class='error'>用户名或密码错误！</span>");
                        }else{
                            out.print("<span class='error'>其它错误！</span>");
                        }
                    }
                %>
            </form>
        </div>

    </div>
  </div>
  <%@include file="common/footer.jsp"%>
</div>
</body>
</html>

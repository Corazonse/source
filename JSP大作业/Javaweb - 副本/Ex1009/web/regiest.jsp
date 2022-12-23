<%@ page contentType="text/html;charset=UTF-8" language="Java" %>
<head>
    <title>用户注册</title>
    <link rel="stylesheet" href="./css/login.css">
</head>
<body>
<div id="container">
    <%@include file="common/header.jsp"%>
    <div  class="main">
        <div class="login">
            <div class="top">
                <img src="./images/quanx32.gif">
                <span>&nbsp;用户注册</span>
            </div>
            <div class="content">
                <form method="post" action="regiestSubmit.jsp">
                    <p>
                        <span>用户名：</span>
                        <input type="text" name="username" class="inputtxt">
                    </p>
                    <p>
                        <span>密&nbsp;&nbsp;码：</span>
                        <input type="text" name="password" class="inputtxt">
                    </p>
                    <p>
                        <span>确认密码：</span>
                        <input type="text" name="confirmPassword" class="inputtxt">
                    </p>
                    <p>
                        <input type="submit" value="注册"  class="loginbtn">
                    </p>
                    <%
                        if(request.getParameter("err")!=null){
                            String err=request.getParameter("err");
                            if(err.equals("-1")){
                                out.print("<span class='error'>用户名或密码不能为空！</span>");
                            }else if(err.equals("-2")){
                                out.print("<span class='error'>两次密码不一致！</span>");
                            }else if(err.equals("-3")) {
                                out.print("<span class='error'>用户名已经存在！</span>");
                            }else {
                                out.print("<span class='error'>用户注册失败！</span>");
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

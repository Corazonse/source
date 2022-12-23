<%@ page contentType="text/html;charset=UTF-8" language="Java" %>
<!doctype html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>管理员登录</title>
    <script src="bootstrap-3.4.1/dist/js/jQuery-3.6.1.js"></script>
    <link rel="stylesheet" href="./bootstrap-3.4.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/all2.css">
    <link rel="stylesheet" href="./css/all1.css">
    <script src="bootstrap-3.4.1/dist/js/bootstrap.min.js"></script>
    <style>
        body{
            background-image:url("./img/风铃.jpg") ;
        }
        .regi{
            width: 600px;
            height: 400px;
            margin: 200px auto;
            /*background-color: pink;*/
        }
        h2{
            width: 150px;
            height: 50px;
            margin: 0 auto;
        }
        .table{
            width: 400px;
            height: 50px;
            margin: 50px auto;
        }
        td{
            height: 30px;
            font-size: 20px;
        }
        .btn2{
            padding: 0;
            display: block;
            margin: 8px auto;
            width:120px ;
            height: 35px;
            font-size: 15px;

        }
        .btn-re{
            line-height: 35px;
            text-align: center;
            padding: 0;
            margin: 0 auto;
            display: block;
            width:120px ;
            height: 35px;
            font-size: 15px;
        }
    </style>
</head>
<body>
<div class="back">
<div class="top">

    <div class="top-mini">
        <div class="logo"><a href="https://www.gzasc.edu.cn/CampusNews/info_itemid_16798.html"><img src="./img/gyk.png"
                                                                                                    alt=""></a></div>
        <a href="index.jsp"><span class="title">论坛后台管理系统</span></a>
        <button class="btn btn-primary btn1"><a class="btn1-a" href="">管理员登录</a></button>
    </div>
</div>
<div class="regi">
    <form method="post" action="registerSubmit.jsp">
    <table class="table">
        <h2>管理员登录</h2>
        <tbody>
        <tr>
            <td>用户账号：</td>
            <td class="user-name"><input type="text" name="admin_name"></td>
        </tr>
        <tr>
            <td>用户密码：</td>
            <td class="password"><input type="password" name="admin_password"></td>
        </tr>
        </tbody>
    </table>
    <input type="submit" value="登录"  class="login btn btn-success btn2">
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
    <form/>

    <a href="index.jsp" class="btn btn-default btn-re">返回主页</a>

</div>
</div>
</body>
</html>
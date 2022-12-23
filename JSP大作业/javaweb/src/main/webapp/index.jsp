<%@ page contentType="text/html;charset=UTF-8" language="Java" %>
<!doctype html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>后台管理系统</title>
    <script src="bootstrap-3.4.1/dist/js/jQuery-3.6.1.js"></script>
    <link rel="stylesheet" href="./bootstrap-3.4.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/all2.css">
    <link rel="stylesheet" href="./css/all1.css">
    <script src="bootstrap-3.4.1/dist/js/bootstrap.min.js"></script>

</head>
<body>
<div class="top">

    <div class="top-mini">
        <div class="logo"><a href="https://www.gzasc.edu.cn/CampusNews/info_itemid_16798.html"><img src="./img/gyk.png"
                                                                                                    alt=""></a></div>
        <a href="index.jsp"><span class="title">论坛后台管理系统</span></a>
        <a class="btn btn-primary btn1" href="register.jsp">管理员登录</a>
    </div>
</div>
<div class="body-min">
    <div class="header">

    </div>
    <div class="min">
        <div class="min-left">
            <ul>
                <li>
                    <button class="btn btn-primary btn1" id="btn-user">用户管理</button>
                </li>
                <li>
                    <button class="btn btn-primary btn1 " id="btn-post">论坛内容管理</button>
                </li>
                <li>
                    <button class="btn btn-primary btn1" id="btn-check">内容审核</button>
                </li>
            </ul>
        </div>
        <div class="min-right">
            <div class="if1"><iframe src="welcome.jsp" width="800px" id="ifa"></iframe></div>
        </div>
    </div>
    <div class="footed"></div>
</div>
<script src="js/index.js"></script>
</body>
</html>
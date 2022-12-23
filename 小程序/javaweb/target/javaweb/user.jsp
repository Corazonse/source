<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>用户管理</title>
    <script src="bootstrap-3.4.1/dist/js/jQuery-3.6.1.js"></script>
    <link rel="stylesheet" href="./bootstrap-3.4.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/all1.css">
    <link rel="stylesheet" href="./css/user.css">
    <style>
        div{
            width: 1070px;
            height: 460px;
        }
    </style>
</head>
<body>
    <div class="top">
        <h1 class="title">用户列表</h1>
        <div class="search">
            <input type="text" class="form-control">
            <button class="btn btn-primary btn1 del">搜索</button>
        </div>
    </div>
    <div class="min">
        <table class="table table-hover">
            <thead>
            <tr>
                <th>用户名ID</th>
                <th>用户名</th>
                <th>用户账号</th>
                <th>用户密码</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Tanmay</td>
                <td>Bangalore</td>
                <td>560001</td>
                <td>560001</td>
                <td>
                    <button class="btn btn-success btn2">修改</button>
                    <button class="btn btn-danger btn2 del">删除</button>
                </td>
            </tr>
            <tr>
                <td>Sachin</td>
                <td>Mumbai</td>
                <td>400003</td>
                <td>400003</td>
                <td>
                    <button class="btn btn-success btn2">修改</button>
                    <button class="btn btn-danger btn2 del">删除</button>
                </td>
            </tr>
            <tr>
                <td>Uma</td>
                <td>Pune</td>
                <td>411027</td>
                <td>411027</td>
                <td>
                    <button class="btn btn-success btn2">修改</button>
                    <button class="btn btn-danger btn2 del">删除</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

</body>
<script src="./js/user.js"></script>
</html>

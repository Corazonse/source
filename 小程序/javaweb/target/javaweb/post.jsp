<%--
  Created by IntelliJ IDEA.
  User: 周永都
  Date: 2022/12/9
  Time: 16:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>论坛内容管理</title>
    <script src="bootstrap-3.4.1/dist/js/jQuery-3.6.1.js"></script>
    <link rel="stylesheet" href="./bootstrap-3.4.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/all1.css">
    <link rel="stylesheet" href="./css/post.css">
    <style>
        div{
            width: 1070px;
            height: 460px;
        }
    </style>
</head>
<body>
<div class="top">
    <h1 class="title">已发布内容列表</h1>
    <div class="search">
        <input type="text" class="form-control">
        <button class="btn btn-primary btn1">搜索</button>
    </div>
</div>
<div class="min">
    <table class="table table-hover">
        <thead>
        <tr>
            <th>帖子ID</th>
            <th>帖子标题</th>
            <th>帖子内容</th>
            <th>帖子地址</th>
            <th>帖子置顶</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Tanmay</td>
            <td>Bangalore</td>
            <td>560001</td>
            <td>560001</td>
            <td>
                <button class="btn btn-success btn2 top">置顶</button>
                <button class="btn btn-success btn2 up">上移</button>
                <button class="btn btn-success btn2 down">下移</button>

            </td>
        </tr>
        <tr>
            <td>Sachin</td>
            <td>Mumbai</td>
            <td>400003</td>
            <td>400003</td>
            <td>
                <button class="btn btn-success btn2 top">置顶</button>
                <button class="btn btn-success btn2 up">上移</button>
                <button class="btn btn-success btn2 down">下移</button>

            </td>
        </tr>
        <tr>
            <td>Uma</td>
            <td>Pune</td>
            <td>411027</td>
            <td>411027</td>
            <td>
                <button class="btn btn-success btn2 top">置顶</button>
                <button class="btn btn-success btn2 up">上移</button>
                <button class="btn btn-success btn2 down">下移</button>
            </td>
        </tr>
        </tbody>
    </table>



</div>

</body>
<script src="js/post.js"></script>
</html>

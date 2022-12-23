<%@ page contentType="text/html;charset=UTF-8" language="Java" %>

<%
    //  1. 取得用户输入的信息
    //  2. 判断用户输入的信息是否在数据库中存在
    //  3. 用户存在，就跳转到首页 ，否则，则输入提示信息：用户不存在或者用户名密码错误

    String username = request.getParameter("username");
    String password = request.getParameter("password");

    //假设数据库有个用户名为: admin ,密码为：123456
    if(username.equals("admin") && password.equals("123456")) {
        //session 保存用户名，内置对象（可以直接用的对象）(会话期间可以跨页面使用)
        //request （调用值）在跳转页面使用
        //application （调用值）在任何时候都可以用

        session.setAttribute("username",username);//保存属性值，第一个参数是重命名，第二个是要保存的值

        response.sendRedirect("index.jsp");
    }else{
        response.sendRedirect("login.jsp?err=-1");
    }
%>
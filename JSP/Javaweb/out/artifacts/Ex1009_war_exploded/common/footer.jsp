<%@ page import="javafx.application.Application" %>
<%@page contentType="text/html;charset=UTF-8" language="Java" %>

<link rel="stylesheet" href="./css/footer.css">
<footer>
    <p>&copy;版权所有：广州应用科技学院计算机科学与技术一班 2022-10</p>
    <p>页面访问的次数:
        <%
            //application是全局的，可以得到每一个页面的数据
            int iCount = 1;
            if (application.getAttribute("iCount") != null){
                iCount=(int)application.getAttribute("iCount");
                iCount++;
            }
                application.setAttribute("iCount",iCount);
                out.print(iCount);
        %>
    </p>
</footer>

<%@page contentType="text/html;charset=UTF-8" language="Java" %>

<link rel="stylesheet" href="./css/footer.css">
<footer>
    <p>&copy;版权所有：广州应用科技学院软件工程一班 2022-10</p>
    <p>页面访问的次数:
        <%
            int iCount=1;
            if(application.getAttribute("iCount")!=null) {
                 iCount=(int)application.getAttribute("iCount");
                iCount++;
            }
            application.setAttribute("iCount",iCount);
            out.print(iCount);
        %>
    </p>
</footer>

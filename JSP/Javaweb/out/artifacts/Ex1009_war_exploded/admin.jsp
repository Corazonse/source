<%@ page contentType="text/html;charset=UTF-8" language="Java" %>
<%
    if(request.getAttribute("iCount")!=null) {
        int iCount =(int)(request.getAttribute("iCount"));
        iCount++;
        pageContext.setAttribute("iCount",iCount,PageContext.REQUEST_SCOPE);
    }
%>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="css/admin.css">
</head>
<body>
    <jsp:include page="common/header.jsp"></jsp:include>
    <div class="main">
        <div class="left">
            <h2>系统后台管理</h2>
            <div class="menu">
                <ul>
                    <li><a href="" target="contentFrame">用户管理</a></li>
                    <li><a href="" target="contentFrame">学期管理</a></li>
                    <li><a href="" target="contentFrame">课程管理</a></li>
                </ul>
            </div>
        </div>
        <div class="content">
            <iframe name="contentFrame" id="contentFrame" scrolling="auto" src="default.html">

            </iframe>
        </div>
    </div>
    <jsp:include page="./common/footer.jsp"></jsp:include>
</body>
</html>

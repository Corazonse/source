<%@ page contentType="text/html;charset=UTF-8" language="Java" %>
<%@ page import="com.sontan.Learning.Book"%>
<%@ page import="java.util.ArrayList" %>
  <%
    ArrayList<Book> list = new ArrayList<Book>();
    list.add(new Book("images//course//01.png","程序设计入门","北京大学",102741));
    list.add(new Book("images//course//02.png","青年自我意识","武汉大学",202783));
    list.add(new Book("images//course//03.png","马克思主义民族理论与政策","中山大学",92746));
    list.add(new Book("images//course//04.png","C语言程序设计入门","北京大学",57689));
    list.add(new Book("images//course//05.png","高等数学","中南大学",192746));
    list.add(new Book("images//course//06.png","婴幼儿护理","广州大学",585728));
%>
<html>
  <head>
    <title>在线学习系统</title>
    <link rel="stylesheet" href="./css/index.css">
  </head>
  <body>
  <div id="container">
    <%@include file="common/header.jsp"%>
    <div  class="main">
      <div class="left">
        <%@include file="user.jsp"%>
      </div>
      <div class="right">
          <% for(Book book:list) { %>
            <div class="course">
              <img src="<%=book.getImg()%>">
              <p class="name"><%=book.getName()%></p>
              <p class="school"><%=book.getPublish()%></p>
              <p class="number"><%=book.getNumber()%>人参加</p>
            </div>
          <% } %>
      </div>
    </div>
    <%if(request.getAttribute("info")=="success")  { %>
      <script>
        alert("插入成功");
      </script>
     <% } %>
    <%@include file="common/footer.jsp"%>
  </div>
  </body>
</html>

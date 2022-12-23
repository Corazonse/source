<%@ page contentType="text/html;charset=UTF-8" language="Java" %>
<%
  if(session.getAttribute("username")!=null) {
    session.removeAttribute("username");
  }
  session.invalidate();
  response.sendRedirect("index.jsp");
%>

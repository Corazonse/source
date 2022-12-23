<%@ page import="entity.Admin" %>
<%@ page import="dao.AdminDao" %>
<%@ page import="control.database.AdminTable" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%

    String name=request.getParameter("admin_name");
    String password=request.getParameter("admin_password");
    Admin admin=new Admin();
    admin.setAccount(name);
    admin.setPassword(password);
    AdminDao adminDao=new AdminTable();

    if(adminDao.verifyAdmin(admin)){
        response.sendRedirect("index.jsp");
    }else {
        response.sendRedirect("register.jsp?err=-1");
    }


%>

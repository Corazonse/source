package com.sontan.dao;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

//连接数据库
public class DBHelper {
    static final String JDBC_DRIVER="com.mysql.cj.jdbc.Driver";
    public static Connection getConnection(String dbName,String user,String password) {
        final String DB_URL="jdbc:mysql://localhost:3306/"+dbName+"?serverTimezone=GMT%2B8&useSSL=false";
        Connection conn=null;
        //注册驱动
        try{
           Class.forName(JDBC_DRIVER) ;
        }catch(ClassNotFoundException e){
            System.out.println(e.getException());
            e.printStackTrace();
        }
        //获得数据库连接
        try{
            conn= DriverManager.getConnection(DB_URL,user,password);
        }catch(SQLException e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        return conn;
    }

    public static void closeConnection(Connection conn) {
        if(conn!=null) {
            try{
                conn.close();
            }catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}

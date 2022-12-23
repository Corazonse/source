package com.sontan.dao;

import com.sontan.Learning.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDaoImpl implements UserDao{
    Connection conn;
    public UserDaoImpl() {
        conn =getConnection();
    }
    private Connection getConnection(){
        return DBHelper.getConnection("learndb","root","123456");
    }
    @Override
    public boolean checkLogin(User user) {
        boolean result=false;
        if(conn==null){
            conn=getConnection();
        }
        String sql = "select * from user where username=? and password=?";
        PreparedStatement pstmt;
        ResultSet rs;
        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1,user.getUsername());
            pstmt.setString(2,user.getPassword());
            rs=pstmt.executeQuery();
            if(rs!=null&&rs.next()){
                result=true;
            }
        }catch (SQLException e){
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public boolean validateUsername(User user) {
        boolean flag = false;
        if (conn==null){
            conn=getConnection();
        }
        String sql = "select * from user where username=?";
        PreparedStatement pstmt;
        ResultSet rs;
        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1,user.getUsername());
            rs=pstmt.executeQuery();
            if(rs!=null && rs.next()){
                flag=true;
            }
        }catch (SQLException e){
            e.printStackTrace();
        }
        return flag;
    }

    @Override
    public int insertUser(User user) {
        if (conn==null){
            conn=getConnection();
        }
        String sql = "INSERT INTO user(username,password) VALUES(?,?);";
        PreparedStatement pstmt;
        int rs=0;
        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1,user.getUsername());
            pstmt.setString(2,user.getPassword());
            rs=pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rs;
    }
}

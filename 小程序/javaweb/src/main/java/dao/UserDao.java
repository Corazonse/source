package dao;

import entity.User;

import java.util.ArrayList;

public interface UserDao {
    /*
     * 1.管理员登录
     * 2.管理员对用户数据表的操作（用户管理）
     * 3.管理员对已发布帖子内容的操作（论坛内容管理）
     * 4.管理员对未发布帖子内容的审核（内容审核）
     */


    int addUser(User user); //增加用户
    int delUser(User user); //删除用户
    int refUser(User user); //修改用户
    ArrayList<User> selUser(); //显示用户列表

    boolean checkLogin(User user);//登录





}

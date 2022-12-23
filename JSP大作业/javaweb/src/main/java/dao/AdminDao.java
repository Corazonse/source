package dao;

import entity.Admin;

public interface AdminDao {
    boolean verifyAdmin(Admin admin);   //管理员登录验证
}

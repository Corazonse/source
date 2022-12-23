package com.sontan.dao;

import com.sontan.Learning.User;

public interface UserDao {
    public boolean checkLogin(User user);
    public boolean validateUsername(User user);
    public int insertUser(User user);
}

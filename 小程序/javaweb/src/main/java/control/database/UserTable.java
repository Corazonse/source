package control.database;

import dao.UserDao;
import entity.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class UserTable implements UserDao {
    @Override
    public int addUser(User user) {
        String sql = "INSERT INTO users(user_id,user_name, user_passwd, user_posts, user_account) VALUES (?, ?, ?, ?, ?)";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 设置参数
            statement.setInt(1, user.getId());
            statement.setString(2, user.getName());
            statement.setString(3, user.getPassword());
            statement.setString(4, "");
            statement.setString(5, user.getAccount());
            // 执行sql
            return statement.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            DbHelper.closeConnection(connection);
        }
    }

    @Override
    public int delUser(User user) {
        String sql = "delete from WHERE user_id = ?";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 设置参数
            statement.setInt(2, user.getId());
            // 执行sql
            return statement.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            DbHelper.closeConnection(connection);
        }
    }

    @Override
    public int refUser(User user) {
        String sql = "UPDATE users SET user_name = ?, user_passwd = ?, user_posts = ?, user_account = ? WHERE user_id = ?";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 设置参数
            statement.setString(1, user.getName());
            statement.setString(2, user.getPassword());
            statement.setString(3, "");
            statement.setString(4, user.getAccount());
            statement.setInt(5, user.getId());
            // 执行sql
            return statement.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            DbHelper.closeConnection(connection);
        }
    }

    @Override
    public ArrayList<User> selUser() {
        String sql = "select * from users";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        ArrayList<User> list = new ArrayList();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 执行sql
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                User item = new User();
                item.setId(resultSet.getInt("user_id"));
                item.setAccount(resultSet.getString("user_account"));
                item.setName(resultSet.getString("user_name"));
                item.setPassword(resultSet.getString("user_passwd"));
                list.add(item);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            DbHelper.closeConnection(connection);
        }
        return list;
    }

    @Override
    public boolean checkLogin(User user) {
        boolean result=false;
        String sql = "select * from user where username=? and password=?";
        PreparedStatement pstmt;
        ResultSet rs;
        try {
            Connection connection = DbHelper.getConnection();
            pstmt = connection.prepareStatement(sql);
            pstmt.setString(1,user.getName());
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
}

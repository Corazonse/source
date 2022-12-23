package control.database;

import dao.AdminDao;
import entity.Admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class AdminTable implements AdminDao {
    @Override
    public boolean verifyAdmin(Admin admin) {
        String sql = "select count(1) from admin where am_account=? and am_passwd=?";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 设置参数
            statement.setString(1, admin.getAccount());
            statement.setString(2, admin.getPassword());
            // 执行sql
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                int count = resultSet.getInt(1);
                return count > 0;
            }

        } catch (Exception e) {
            throw new RuntimeException(e);
        }finally {
            DbHelper.closeConnection(connection);
        }
        return false;
    }
}

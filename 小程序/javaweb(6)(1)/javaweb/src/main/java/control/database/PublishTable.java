package control.database;

import dao.PublishDao;
import entity.Publish;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class PublishTable implements PublishDao {

    @Override
    public int addPublish(Publish publish) {
        String sql = "INSERT INTO Publish(user_id, fm_id) VALUES (?, ?)";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 设置参数
            statement.setInt(1, publish.getUser_id());
            statement.setInt(2, publish.getForum_id());
            // 执行sql
            return statement.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            DbHelper.closeConnection(connection);
        }
    }

    @Override
    public int deletePublish(Publish publish) {
        String sql = "delete from where user_id=? and  fm_id= ?";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 设置参数
            statement.setInt(1, publish.getUser_id());
            statement.setInt(2, publish.getForum_id());
            // 执行sql
            return statement.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            DbHelper.closeConnection(connection);
        }
    }

    @Override
    public int setPublish(Publish publish) {
        String sql = "UPDATE  Publish set user_id=? ,fm_id=? where user_id=? and fm_id=?";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 设置参数
            statement.setInt(1, publish.getUser_id());
            statement.setInt(2, publish.getForum_id());
            statement.setInt(3, publish.getUser_id());
            statement.setInt(4, publish.getForum_id());
            // 执行sql
            return statement.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            DbHelper.closeConnection(connection);
        }
    }
}

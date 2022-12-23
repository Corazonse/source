package control.database;

import dao.ForumDao;
import entity.Forum;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class ForumTable implements ForumDao {


    @Override
    public ArrayList<Forum> selForum() {
        String sql = "select * from forum";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        ArrayList<Forum> list = new ArrayList();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 执行sql
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Forum item = new Forum();
                item.setId(resultSet.getInt("fm_id"));
                item.setTopic(resultSet.getString("fm_topic"));
                item.setCondition(resultSet.getBoolean("fm_condition"));
                item.setBody(resultSet.getString("fm_body"));
                item.setTop(resultSet.getBoolean("fm_top"));
                item.setAddress(resultSet.getString("fm_address"));
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
    public Forum selForm(Forum forum) {
        String sql = "select * from forum where fm_id=?";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        Forum item = new Forum();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 设置参数
            statement.setInt(1, forum.getId());
            // 执行sql
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                item.setId(resultSet.getInt("fm_id"));
                item.setTopic(resultSet.getString("fm_topic"));
                item.setCondition(resultSet.getBoolean("fm_condition"));
                item.setBody(resultSet.getString("fm_body"));
                item.setTop(resultSet.getBoolean("fm_top"));
                item.setAddress(resultSet.getString("fm_address"));
                return item;
            }

        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            DbHelper.closeConnection(connection);
        }
        return null;
    }

    @Override
    public int setForm(Forum forum) {
        String sql = "UPDATE forum SET fm_topic = ?, fm_condition = ?, fm_address = ?, fm_top = ?, fm_body = ?, user_posts = ? WHERE fm_id = ?";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 设置参数
            statement.setString(1, forum.getTopic());
            statement.setBoolean(2, forum.isCondition());
            statement.setString(3, forum.getAddress());
            statement.setBoolean(4, forum.isTop());
            statement.setString(5, forum.getBody());
            statement.setString(6, "");
            statement.setInt(7, forum.getId());
            // 执行sql
            return statement.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            DbHelper.closeConnection(connection);
        }
    }

    @Override
    public int addForm(Forum forum) {
        String sql = "INSERT INTO forum(fm_id, fm_topic, fm_condition, fm_address, fm_top, fm_body, user_posts) VALUES (?, ?, ?, ?, ?, ?, ?)";
        // 获取数据库连接
        Connection connection = DbHelper.getConnection();
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            // 设置参数
            statement.setInt(1, forum.getId());
            statement.setString(2, forum.getTopic());
            statement.setBoolean(3, forum.isCondition());
            statement.setString(4, forum.getAddress());
            statement.setBoolean(5, forum.isTop());
            statement.setString(6, forum.getBody());
            statement.setString(7, "");
            // 执行sql
            return statement.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            DbHelper.closeConnection(connection);
        }
    }


}

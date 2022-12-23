package control.database;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbHelper {


    /**
     * 获取数据库连接
     *
     * @return
     */
    public static Connection getConnection() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            return DriverManager.getConnection("jdbc:mysql://localhost:3306/Lt_website", "root", "1234");
        } catch (Exception e) {
            System.out.println("获取数据库链接失败");
            throw new RuntimeException(e);
        }
    }


    /**
     * 关闭数据库连接
     * @param connection
     */
    public static void closeConnection(Connection connection) {
        if (null != connection) {
            try {
                connection.close();
            } catch (SQLException e) {

            }
        }
    }

}

package dao;

import entity.Forum;

import java.util.ArrayList;

public interface ForumDao {
    ArrayList<Forum> selForum(); //显示帖子列表
    Forum selForm(Forum forum); //查看具体帖子内容
    int setForm(Forum forum); //修改帖子内容

    int addForm(Forum forum); //通过审核，添加帖子

    int delForm(Forum forum);
}

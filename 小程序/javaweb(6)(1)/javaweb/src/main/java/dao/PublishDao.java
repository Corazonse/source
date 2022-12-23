package dao;

import entity.Publish;

public interface PublishDao {
    int addPublish(Publish publish);//增加发布表
    int deletePublish(Publish publish);//删除发布表
    int setPublish(Publish publish);//修改发布表
}

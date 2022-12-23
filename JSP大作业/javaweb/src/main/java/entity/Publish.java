package entity;

public class Publish {
    private int Forum_id;
    private int user_id;

    public Publish(int forum_id, int user_id) {
        Forum_id = forum_id;
        this.user_id = user_id;
    }

    public Publish() {
    }

    public int getForum_id() {
        return Forum_id;
    }

    public void setForum_id(int forum_id) {
        Forum_id = forum_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}

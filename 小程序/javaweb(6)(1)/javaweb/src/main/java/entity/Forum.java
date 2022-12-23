package entity;

public class Forum {
    private int id;
    private String topic;
    private String body;
    private String address;
    private boolean top;
    private boolean condition;

    public Forum() {
    }

    public Forum(int id, String topic, String body, String address, boolean top, boolean condition) {
        this.id = id;
        this.topic = topic;
        this.body = body;
        this.address = address;
        this.top = top;
        this.condition = condition;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isTop() {
        return top;
    }

    public void setTop(boolean top) {
        this.top = top;
    }

    public boolean isCondition() {
        return condition;
    }

    public void setCondition(boolean condition) {
        this.condition = condition;
    }
}

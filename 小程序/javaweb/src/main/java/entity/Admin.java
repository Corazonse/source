package entity;

public class Admin {
    private int id;
    private String account;
    private String password;
    private String name;
    private String avatar;

    public Admin() {
    }

    public Admin(int id, String account, String password, String name, String avatar) {
        this.id = id;
        this.account = account;
        this.password = password;
        this.name = name;
        this.avatar = avatar;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}

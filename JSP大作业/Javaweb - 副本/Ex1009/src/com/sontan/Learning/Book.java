package com.sontan.Learning;

public class Book{
    private String img;
    private String name;
    private String publish;
    private int number;
    public Book(String img,String name,String publish,int number){
        this.img=img;
        this.name=name;
        this.publish=publish;
        this.number=number;
    }
    public String getImg(){return this.img;}
    public String getName(){return this.name;}
    public String getPublish(){return this.publish;}
    public int getNumber(){return this.number;}
}

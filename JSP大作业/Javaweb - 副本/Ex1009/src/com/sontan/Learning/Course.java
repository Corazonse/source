package com.sontan.Learning;

import java.util.Date;

public class Course {
    private int id; //课程id
    private String name;    //课程名
    private String teacher; //任课老师
    private int credit; //学分
    private Date begin; //开始时间
    private int duration;  //持续时间（周数）
    private String interlinkage;    //链接
    private boolean condition;  //状态，true为正常上课，false为作废

    public Course() {
    }

    public Course(String name, String teacher, int credit, Date begin,int  duration, String interlinkage, boolean condition) {
        this.name = name;
        this.teacher = teacher;
        this.credit = credit;
        this.begin = begin;
        this.duration = duration;
        this.interlinkage = interlinkage;
        this.condition = condition;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public int getCredit() {
        return credit;
    }

    public void setCredit(int credit) {
        this.credit = credit;
    }

    public Date getBegin() {
        return begin;
    }

    public void setBegin(Date begin) {
        this.begin = begin;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getInterlinkage() {
        return interlinkage;
    }

    public void setInterlinkage(String interlinkage) {
        this.interlinkage = interlinkage;
    }

    public boolean isCondition() {
        return condition;
    }

    public void setCondition(boolean condition) {
        this.condition = condition;
    }
}

/*
SQLyog Enterprise v12.08 (32 bit)
MySQL - 5.6.5-m8 : Database - lt_website
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`lt_website` /*!40100 DEFAULT CHARACTER SET gbk */;

USE `lt_website`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `am_id` int(6) NOT NULL COMMENT '管理员ID',
  `am_passwd` varchar(45) NOT NULL COMMENT '管理员密码',
  `am_name` varchar(16) NOT NULL COMMENT '管理员名称',
  `am_avatar` varchar(100) NOT NULL COMMENT '管理员头像',
  `am_account` varchar(45) NOT NULL COMMENT '管理员账号',
  PRIMARY KEY (`am_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

/*Data for the table `admin` */

insert  into `admin`(`am_id`,`am_passwd`,`am_name`,`am_avatar`,`am_account`) values (1,'123','amdin','','admin');

/*Table structure for table `forum` */

DROP TABLE IF EXISTS `forum`;

CREATE TABLE `forum` (
  `fm_id` int(6) NOT NULL COMMENT '帖子ID',
  `fm_topic` varchar(45) NOT NULL COMMENT '帖子标题',
  `fm_condition` tinyint(6) NOT NULL COMMENT '帖子状态',
  `fm_address` varchar(50) NOT NULL COMMENT '帖子地址',
  `fm_top` tinyint(2) NOT NULL COMMENT '帖子置顶',
  `fm_body` varchar(4086) NOT NULL COMMENT '帖子内容',
  `user_posts` varchar(50) NOT NULL COMMENT '用户已发表过的帖子',
  PRIMARY KEY (`fm_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

/*Data for the table `forum` */

insert  into `forum`(`fm_id`,`fm_topic`,`fm_condition`,`fm_address`,`fm_top`,`fm_body`,`user_posts`) values (1,'first',0,'',0,'hello',''),(2,'second',0,'',0,'hi',''),(3,'third',0,'',0,'heiheihei',''),(4,'fourth',0,'',0,'love','');

/*Table structure for table `publish` */

DROP TABLE IF EXISTS `publish`;

CREATE TABLE `publish` (
  `user_id` int(6) NOT NULL COMMENT '用户id',
  `fm_id` int(6) NOT NULL COMMENT '帖子ID',
  PRIMARY KEY (`user_id`,`fm_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

/*Data for the table `publish` */

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_name` varchar(18) NOT NULL COMMENT '用户名称',
  `user_id` int(6) NOT NULL COMMENT '用户id',
  `user_passwd` varchar(11) NOT NULL COMMENT '用户密码',
  `user_posts` varchar(50) NOT NULL COMMENT '用户已发表过的帖子',
  `user_account` varchar(12) NOT NULL COMMENT '用户账号',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

/*Data for the table `users` */

insert  into `users`(`user_name`,`user_id`,`user_passwd`,`user_posts`,`user_account`) values ('hello',3,'1234','','12345');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

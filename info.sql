-- 创建数据库并插入测试数据
CREATE DATABASE IF NOT EXISTS `video` DEFAULT CHARSET utf8;
USE `video`;
CREATE TABLE `info`
(`people_id`INT,`abnormal` INT,`name`VARCHAR(20),`age` INT,`sex` INT,`pic_url` VARCHAR(50),`video_url` VARCHAR(50),`last_time` DATE);
INSERT INTO `info` 
(`people_id`,`abnormal`,`name`,`age`,`sex`,`pic_url`,`video_url`,`last_time`)
VALUES
(1,0,"Jerry",20,0,null,null,'2018-3-8'),
(2,0,"Tom",20,0,null,null,'2018-3-8'),
(3,0,"KK",20,0,null,null,'2018-3-8'),
(4,1,"LL",20,0,null,null,'2018-3-8');
-- 创建数据库并插入测试数据
CREATE DATABASE IF NOT EXISTS `video` DEFAULT CHARSET utf8 COLLATE utf9_general_ci;
CREATE TABLE `video` `info`(`people_id`INT, `name`VARCHAR(20),`age` INT,`sex` INT,`pic_url` VARCHAR(50),`video_url` VARCHAR(50),`last_time` DATE);
INSERT INTO `info` 
(`people_id`,`name`,`age`,`sex`,`pic_url`,`video_url`,`last_time`)
VALUES
(1,"Jerry",20,0,null,null,'2018-3-8'),
(2,"Tom",20,0,null,null,'2018-3-8'),
(3,"KK",20,0,null,null,'2018-3-8'),
(4,"LL",20,0,null,null,'2018-3-8');
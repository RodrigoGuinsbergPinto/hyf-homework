SET NAMES utf8mb4;

create database if not exists `motorcycle_championship`;

USE motorcycle_championship;

CREATE TABLE `category` (
    `category_id` INT(10) UNSIGNED NOT NULL PRIMARY KEY,
    `category_name` VARCHAR(255) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `motorcycle` (
    `motorcycle_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `motorcycle_manufacturer` VARCHAR(255) NOT NULL,
    `engine` VARCHAR(255) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


CREATE TABLE `team` (
    `team_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `team_name` VARCHAR(255) NOT NULL,
    `team_country` VARCHAR(255) NOT NULL,
    `motorcycle` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_motorcycle` FOREIGN KEY (`motorcycle`)
        REFERENCES `motorcycle` (`motorcycle_id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


CREATE TABLE `rider` (
    `rider_id` VARCHAR(4) NOT NULL PRIMARY KEY,
    `rider_name` VARCHAR(255) NOT NULL,
    `dob` DATE NOT NULL,
    `rider_country` VARCHAR(255) NOT NULL,
    `rider_team` INT(10) UNSIGNED NOT NULL,
    `current_category` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_team` FOREIGN KEY (`rider_team`)
        REFERENCES `team` (`team_id`)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_category` FOREIGN KEY (`current_category`)
        REFERENCES `category` (`category_id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


CREATE TABLE `champion` (
    `rider_id` VARCHAR(4) NOT NULL,
    `year` INT(4) NOT NULL,
    `team` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_champion_rider` FOREIGN KEY (`rider_id`)
        REFERENCES `rider` (`rider_id`)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_champion_team` FOREIGN KEY (`team`)
        REFERENCES `team` (`team_id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;







SET NAMES utf8mb4;

create database if not exists `school`;

USE school;


CREATE TABLE `class` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    `begins` DATE NOT NULL,
    `ends` DATE NULL DEFAULT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `student` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(15) NULL,
    `class_id` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_student` FOREIGN KEY (`class_id`)
        REFERENCES `class` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

-- class
INSERT INTO class (id, name, begins, ends) VALUES (1, 'ClassA', '2022-01-01', '2022-06-30');
INSERT INTO class (id, name, begins, ends) values (2, 'ClassB', '2022-07-01', '2022-12-30');
INSERT INTO class (id, name, begins, ends) values (3, 'ClassC', '2023-01-01', '2023-06-30');
INSERT INTO class (id, name, begins, ends) values (4, 'ClassD', '2023-07-01', '2023-12-30');

-- students
INSERT INTO student (id, name, email, phone, class_id) VALUES (1, 'Mary Jane', 'mj@aol.com', '94 48 77 74', 1);
INSERT INTO student (id, name, email, phone, class_id) VALUES (2, 'John Smith', 'js@email.com', '94 48 77 75', 1);
INSERT INTO student (id, name, email, phone, class_id) VALUES (3, 'Chris Malone', 'cm@email.com', '94 48 68 99', 2);
INSERT INTO student (id, name, email, phone, class_id) VALUES (4, 'John Smith', 'js@lalamail.com', '94 48 77 75', 2);
INSERT INTO student (id, name, email, phone, class_id) VALUES (5, 'Pamela Jhonson', 'pj@email.com', '75 48 68 74', 3);
INSERT INTO student (id, name, email, phone, class_id) VALUES (6, 'David Phillips', 'dp@hotmail.com', '33 48 77 44', 3);
INSERT INTO student (id, name, email, phone, class_id) VALUES (7, 'Justin Elliot', 'je@email.com', '75 48 01 74', 4);
INSERT INTO student (id, name, email, phone, class_id) VALUES (8, 'Sarah Valentine', 'sv@coldmail.com', '33 48 77 44', 4);
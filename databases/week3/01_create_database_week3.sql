SET NAMES utf8mb4;

create database if not exists `meal_sharing`;

USE meal_sharing;


CREATE TABLE `meal` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT(10) UNSIGNED NOT NULL,
    `price` DECIMAL(6 , 2 ) NOT NULL,
    `created_date` DATE NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `reservation` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` INT(10) UNSIGNED NOT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL,
    `contact_phonenumber` VARCHAR(255) NOT NULL,
    `contact_name` VARCHAR(255) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,
    CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`)
        REFERENCES `meal` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `review` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `stars` INT(10) UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL,
    CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`)
        REFERENCES `meal` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


-- meal
INSERT INTO meal (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES (1, 'cannelloni', 'pancakes filled with spinach & ricotta served with a wild mushroom cream sauce with a touch of our napoli sauce', 'nørrebro', '2023-03-03 17:00:00', 20, 130, current_date() );
INSERT INTO meal (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES (2, 'lasagne', 'layers of pasta with beef, ham, tomato sauce, bechemel & mozzarella', 'vesterbro', '2023-03-04 18:00:00', 20, 140, current_date());
INSERT INTO meal (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES (3, 'pollo allas si', 'chicken breast topped with mozzarella & parma ham, cooked in a tomato sauce served with chips an peas', 'østerbro', '2023-03-05 18:30:00', 20, 160, current_date());
INSERT INTO meal (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES (4, 'insalata mozzarella', 'mozzarella, tomato, mixed leaf salad', 'frederiksberg', '2023-03-03 17:30:00', 20, 80, current_date());

-- reservation
INSERT INTO `reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (1, 17, 1, current_date(), '91 91 23 23', 'john', 'john@gmail.com');
INSERT INTO `reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (2, 4, 4, current_date(), '88 91 23 45', 'david', 'david@gmail.com');
INSERT INTO `reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (3, 6, 3, current_date(), '89 91 23 24', 'mary', 'mary@gmail.com');

-- review
INSERT INTO `review` (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('best italian restaurant in town', 'nice staff, traditional Italian decor, food cooked like my grandma used to make it, good wine selection', 2, 5, current_date());
INSERT INTO `review` (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('good experience', 'everything was as expected from a good restaurant, it has a parking area', 3, 4, current_date());
INSERT INTO `review` (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('not what I expected', 'I had a reservation for 6pm, did not sit down until 6:35pm, the bar was full, nowhere to sit, the waiter brought me the wrong order, the parking lot was full but beer was no expesinve and cold', 1, 2, current_date())



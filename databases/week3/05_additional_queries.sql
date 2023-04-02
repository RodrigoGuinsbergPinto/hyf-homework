USE meal_sharing;

-- Now add a couple of different meals, reservations and reviews with different attributes.
-- add meal
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('Bistecca', 'sirloin steak with porcini cream sauce served with chips & peas.', 'amager', '2023-03-05 18:00:00', 20, 165, current_date() );
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('Insalata di Pollo', 'gilled chicken mixed leaf salad.', 'vesterbro', '2023-03-04 18:30:00', 10, 95, current_date());
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('Tiramisu', 'layered no-bake dessert consisting of ladyfingers soaked with coffee and rum, then layered with a whipped mixture of sugar, eggs and the creamy, sweet mascarpone cheese sprinkled with cocoa.', 'vesterbro', '2023-03-04 18:30:00', 30, 75, current_date());

-- add reservation
INSERT INTO `reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (3, 1, current_date(), '67 91 23 39', 'pamela', 'pam45@live.com');
INSERT INTO `reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (5, 2, current_date(), '81 42 23 44', 'scott', 'scott80@outlook.com');

-- add review
INSERT INTO `review` (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('thank god the water is free', 'everything was salty, even dessert', 5, 1, current_date());
INSERT INTO `review` (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('awesome', 'everything was perfect, entree, main dish, dessert (tiramisu), quiet ambient, good for a date, sommelier to help with wine selection, many good Italian wines, price is fair', 3, 5, current_date());


-- With those meals create the following queries:
-- Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price < 140;

-- Get meals that still has available reservations
SELECT 
    meal.title,
    meal.max_reservations,
    (meal.max_reservations - SUM(reservation.number_of_guests)) AS available_reservations
FROM meal
INNER JOIN reservation
ON meal.id = reservation.meal_id
GROUP BY meal.id;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE title LIKE '%pollo%';

-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date BETWEEN '2023-01-01' AND '2023-03-31';

-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal
WHERE price < 160
LIMIT 4;

-- Get the meals that have good reviews
SELECT meal.title, review.stars
FROM meal 
INNER JOIN review
ON meal.id = review.meal_id
WHERE review.stars >= 3;

-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM reservation
INNER JOIN meal 
ON reservation.meal_id = meal.id
WHERE meal.title = 'cannelloni'
ORDER BY meal.created_date ASC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, avg(review.stars) AS 'avg_rating'
FROM meal
INNER JOIN review
ON meal.id = review.meal_id
GROUP BY review.meal_id
ORDER BY avg_rating;


USE meal_sharing;

-- Get all reviews
SELECT *
FROM review;

-- Add a new review
INSERT INTO `review` (`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES ('mamma mia', 'cool place, romantic ambience, tasty traditional Italian food, I will definitely come back', 2, 5, current_date());

-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id = 4;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET stars = 1
WHERE id = 3;

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 2;


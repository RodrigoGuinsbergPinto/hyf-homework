USE meal_sharing;

-- Get all meals
SELECT *
FROM meal;

-- Add a new meal
INSERT INTO meal (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES ('risotto pollo porcine', 'chicken with wild mushroom, cream peas & white wine sauce', 'nørrebro', '2023-03-04 19:00:00', 2, 150, current_date() );

-- Get a meal with any id, fx 1
SELECT *
FROM meal
WHERE id = 3;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET location = 'amager', max_reservations = 4
WHERE id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 1;
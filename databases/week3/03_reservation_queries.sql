USE meal_sharing;

-- Get all reservations
SELECT *
FROM reservation;

-- Add a new reservation
INSERT INTO `reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES (4, 2, current_date(), '77 91 23 81', 'linda', 'linda@aol.com');

-- Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET meal_id = 4, contact_phonenumber = '67 09 58 84'
WHERE id = 3;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 1;




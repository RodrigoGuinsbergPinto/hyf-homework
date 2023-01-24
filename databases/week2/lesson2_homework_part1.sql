USE hyf_lesson2;

-- Part 1: Working with tasks
-- Write the following sql queries:
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) VALUES ('Book flight', 'Vacation.', now(), now(), '2023-03-31', 1, 1);

-- Change the title of a task
UPDATE task
SET title = 'Book hotel room'
WHERE id = 36;

-- Change a task due date
UPDATE task
SET due_date = '2023-02-28'
WHERE id = 36;

-- Change a task status
UPDATE task
SET status_id = 2
WHERE id = 36;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 35;

-- Delete a task
DELETE FROM task
WHERE id = 34;

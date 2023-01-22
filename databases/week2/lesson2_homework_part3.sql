-- You should do these queries on the database hyf_lesson2, which we created last class.
-- Get all the tasks assigned to users whose email ends in @spotify.com
USE hyf_lesson2;

SELECT *
FROM user
WHERE email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT *
FROM user
INNER JOIN user_task ON user.id = user_task.user_id
INNER JOIN task ON user_task.task_id = task.id
INNER JOIN STATUS ON task.status_id = status.id
WHERE user.name = 'Donald Duck'
AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT *
FROM user
INNER JOIN user_task ON user.id = user_task.user_id
INNER JOIN task ON user_task.task_id = task.id
WHERE month(task.created) = 9
AND user.name =  'Maryrose Meadows';

-- Find how many tasks where created in each month, e.g. how many tasks were created in october,
-- how many tasks were created in november, etc. (hint: use group by)
SELECT monthname(task.created) AS month, count(task.id) AS total_tasks 
FROM task 
GROUP BY month;

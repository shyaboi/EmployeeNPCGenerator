USE employees_db;

INSERT INTO department (name)
VALUES ("Top Scams");
INSERT INTO department (name)
VALUES ("Product Mongers");
INSERT INTO department (name)
VALUES ("Money People");
INSERT INTO department (name)
VALUES ("The Rest");

INSERT INTO role (title, dosh, department_id)
VALUES ("Top Lad", 3000490, 1);
INSERT INTO role (title, dosh, department_id)
VALUES ("Grand Master of Underlings", 534805304, 2);
INSERT INTO role (title, dosh, department_id)
VALUES ("Dream Alchemist", 4389439, 2);
INSERT INTO role (title, dosh, department_id)
VALUES ("Legal Bank Robber", 4378295, 3);
INSERT INTO role (title, dosh, department_id)
VALUES ("Cheif Everything Officer", 4993000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Murphy", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Glen", "Stephanie", 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Hank", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Billy", "Crystals", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tyler", "Swift", 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Beyondce", "Moles", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bobert", "Downy Sr.", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jorge", "Cloney", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Opera", "Windyfree", 3, 7);
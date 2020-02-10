DROP TABLE IF EXISTS TBL_EMPLOYEES;
DROP TABLE IF EXISTS TBL_DEPT;
 
 CREATE TABLE TBL_DEPT (
  dept_id INT AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(250) NOT NULL,
  dept_desc VARCHAR(250) NOT NULL
);
 
CREATE TABLE TBL_EMPLOYEES (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  email VARCHAR(250) DEFAULT NULL,
  dept_id INT,
  foreign key (dept_id) references TBL_DEPT(dept_id)
);
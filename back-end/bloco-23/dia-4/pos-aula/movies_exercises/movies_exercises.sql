DROP SCHEMA IF EXISTS movies_exercises;
CREATE SCHEMA movies_exercises;
USE movies_exercises;

CREATE TABLE movies (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  directed_by VARCHAR(20) NOT NULL,
  release_year YEAR NOT NULL,
  PRIMARY KEY (id)
);
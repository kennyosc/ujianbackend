CREATE DATABASE ujianbackend;
use ujianbackend;

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) NOT NULL,
    tahun INT(7) NOT NULL,
    deskripsi VARCHAR(100) NOT NULL
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) NOT NULL
);

CREATE TABLE movcat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    category_id INT NOT NULL,
    CONSTRAINT FK_MovieId FOREIGN KEY (movie_id)
        REFERENCES movies (id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT FKK_CategoryId FOREIGN KEY (category_id)
        REFERENCES categories (id)
        ON UPDATE CASCADE ON DELETE CASCADE
);

SELECT * FROM movies;
SELECT * FROM categories;
SELECT * FROM movcat;

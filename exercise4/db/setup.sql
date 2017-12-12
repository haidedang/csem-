CREATE TABLE owners(
   id SERIAL UNIQUE PRIMARY KEY NOT NULL,
   name TEXT
);
CREATE TABLE shops(
    id SERIAL UNIQUE PRIMARY KEY NOT NULL,
    owner_id INT,
    name TEXT
);
CREATE TABLE products(
   id SERIAL UNIQUE PRIMARY KEY NOT NULL,
   shop_id INT,
   name TEXT,
   price INT
);
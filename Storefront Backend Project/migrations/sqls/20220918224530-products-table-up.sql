CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name varchar(150),
    price numeric(20,2),
    category_id int REFERENCES categories(id)
)
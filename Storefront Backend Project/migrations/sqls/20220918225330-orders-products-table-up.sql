CREATE TABLE orders_products (
    id SERIAL PRIMARY KEY,
    quantity int,
    product_id bigint REFERENCES products(id),
    order_id int REFERENCES orders(id)
)
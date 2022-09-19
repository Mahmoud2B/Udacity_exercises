import client from '../database';

export type Product = {
    id?: number;
    name: string;
    price: string;
};

export class ProductStore {
    async index(): Promise<Product[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM products';

            const request = await conn.query(sql);

            conn.release();

            return request.rows;
        } catch (error) {
            throw new Error(`Can't retrieve users! ${error}`);
        }
    }

    async create(product: Product): Promise<Product> {
        try {
            const conn = await client.connect();
            const sql = `INSERT INTO products (name, price) VALUES ($(1),$(2)) RETURNING *`;
            const result = await conn.query(sql, [product.name, product.price]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Can't Create product! ${error}`);
        }
    }
}

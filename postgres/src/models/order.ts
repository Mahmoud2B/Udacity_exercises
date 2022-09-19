import client from '../database';

export type Order = {
    id?: number;
    status: string;
    user_id: string;
};

export class OrderStore {
    async index(): Promise<Order[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders';

            const request = await conn.query(sql);

            conn.release();

            return request.rows;
        } catch (error) {
            throw new Error(`Can't retrieve users! ${error}`);
        }
    }

    async create(order: Order): Promise<Order> {
        try {
            const conn = await client.connect();
            const sql = `INSERT INTO orders (status, user_id) VALUES ('$(1)','$(2)') RETURNING *`;
            const result = await conn.query(sql, [order.status, order.user_id]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Can't Create product! ${error}`);
        }
    }

    async addProduct(
        quantity: number,
        orderID: string,
        productId: string
    ): Promise<Order> {
        try {
            const conn = await client.connect();
            const sql = `INSERT INTO orders_products (quantity, order_id, product_id) VALUES ($(1),$(2),$(3)) RETURNING *`;
            const result = await conn.query(sql, [
                quantity,
                orderID,
                productId
            ]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Can't Add product! ${error}`);
        }
    }
}

import client from '../database';
import { Product } from './product';

export type Order = {
    id?: number;
    user_id: string;
    status: string;
    products?: OrderProduct[];
};

export type OrderProduct = {
    item: Product;
    quantity: number;
};

export class OrderStore {
    async index(): Promise<Order[]> {
        try {
            const connection = await client.connect();
            const sql = `SELECT orders.id,orders.status,
                        COALESCE(json_agg(json_build_object('item',products,'quantity' ,orders_products.quantity) ORDER BY products.id) FILTER (WHERE orders_products.id IS NOT NULL),'[]') products
                        FROM orders 
                        LEFT JOIN orders_products
                        ON orders_products.order_id = orders.id 
                        LEFT JOIN products
                        ON products.id = orders_products.product_id
                        GROUP BY orders.id`;

            const request = await connection.query(sql);
            connection.release();

            return request.rows;
        } catch (error) {
            throw new Error(`Can't list Orders ${error}`);
        }
    }
    async create(userID: number): Promise<Order> {
        try {
            const connection = await client.connect();
            const sql = `INSERT INTO orders ( user_id, status) VALUES ('${userID}','active') RETURNING *`;

            const request = await connection.query(sql);
            connection.release();

            return request.rows[0];
        } catch (error) {
            throw new Error(`Can't Create Order ${error}`);
        }
    }
    async show(id: number): Promise<Order> {
        try {
            const connection = await client.connect();
            const sql = `SELECT orders.id,orders.status,
            COALESCE(json_agg(json_build_object('item',products,'quantity' ,orders_products.quantity) ORDER BY products.id) FILTER (WHERE orders_products.id IS NOT NULL),'[]') products
            FROM orders 
            LEFT JOIN orders_products
            ON orders_products.order_id = orders.id 
            LEFT JOIN products
            ON products.id = orders_products.product_id
            WHERE orders.id=${id} GROUP BY orders.id`;

            const request = await connection.query(sql);
            connection.release();

            return request.rows[0];
        } catch (error) {
            throw new Error(`Can't Create Product ${error}`);
        }
    }
}

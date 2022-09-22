import client from '../database';
import bcrypt from 'bcrypt';

export type User = {
    id?: number;
    username: string;
    first_name: string;
    last_name: string;
    password: string;
};

export class UserStore {
    async index(): Promise<User[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM users';

            const result = await conn.query(sql);

            conn.release();

            return result.rows;
        } catch (err) {
            throw new Error(`Can't retrieve users! ${err}`);
        }
    }

    async create(user: User): Promise<User> {
        try {
            const conn = await client.connect();

            const hash = bcrypt.hashSync(
                user.password + process.env.BCRYPT_PASSWORD,
                parseInt(process.env.SALT_ROUNDS ?? '1')
            );
            const sql = `INSERT INTO users (username,first_name,last_name,password) VALUES ('${user.username}','${user.first_name}','${user.last_name}','${hash}') RETURNING *`;
            const result = await conn.query(sql);

            conn.release();

            return result.rows[0];
        } catch (error) {
            throw new Error(`Can't Create user! ${error}`);
        }
    }

    async authenticate(
        username: string,
        password: string
    ): Promise<User | null> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM users WHERE username=($1)';

            const result = await conn.query(sql, [username]);

            conn.release();

            if (result.rows.length) {
                const user = result.rows[0];

                if (
                    bcrypt.compareSync(
                        password + process.env.BCRYPT_PASSWORD,
                        user.password
                    )
                ) {
                    return user;
                }
            }

            return null;
        } catch (error) {
            throw new Error(`Something went wrong ${error}`);
        }
    }
}

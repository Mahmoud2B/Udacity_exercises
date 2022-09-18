import client from "../database";
import bcrypt from "bcrypt";

export type User = {
  id?: number;
  name: string;
  username: string;
  password: string;
};

export class UserStore {
  async index(): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM users";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Can't retrieve users! ${err}`);
    }
  }
  async create(user: User): Promise<User> {
    const conn = await client.connect();
    
    const hash = bcrypt.hashSync(
        user.password + process.env.BCRYPT_PASSWORD,
        parseInt(process.env.SALT_ROUNDS ?? "1")
        );
        const sql = `INSERT INTO users VALUES ('${user.name}','${user.username}',($1))`;
        console.log(sql);
    const result = await conn.query(sql, [hash]);
    return result.rows[0];
  }
}

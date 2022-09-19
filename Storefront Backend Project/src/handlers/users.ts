import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user';
import jwt from 'jsonwebtoken';
import checkJWT from '../middlewares/authToken';

const store = new UserStore();

const index = async (_req: Request, res: Response) => {
    const users = await store.index();
    res.json(users);
};
const create = async (req: Request, res: Response) => {
    const user: User = {
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    };
    try {
        const createdUser = await store.create(user);
        res.json(createdUser);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
};

const login = async (req: Request, res: Response) => {
    try {
        const createdUser = await store.authenticate(
            req.body.username,
            req.body.password
        );
        if (createdUser) {
            let token = jwt.sign(
                {
                    user: createdUser
                },
                process.env.TOKEN_SECRET ?? ''
            );
            res.json({ token });
        } else {
            res.status(401).send('User do not exist');
        }
    } catch (error) {
        console.log(error);
    }
};

const users_routes = (app: express.Application) => {
    app.get('/users', checkJWT, index);
    app.post('/login', login);
    app.post('/users/create', create);
};

export default users_routes;

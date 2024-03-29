import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user';
import jwt from 'jsonwebtoken';

const store = new UserStore();

const index = async (req: Request, res: Response) => {
    try {
        jwt.verify(req.body.token, process.env.TOKEN_SECRET ?? '');
    } catch (error) {
        res.status(401).send(error);
        return;
    }
    const users = await store.index();
    res.json(users);
};
const create = async (req: Request, res: Response) => {
    const user: User = {
        name: req.body.name,
        password: req.body.password,
        username: req.body.username
    };
    try {
        jwt.verify(req.body.token, process.env.TOKEN_SECRET ?? '');
    } catch (error) {
        console.log(error);
        res.status(401).send(error);
    }
    try {
        const createdUser = await store.create(user);
        let token = jwt.sign(
            {
                user: createdUser
            },
            process.env.TOKEN_SECRET ?? ''
        );
        res.json(token);
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
        res.json(createdUser);
    } catch (error) {
        console.log(error);
    }
};

const users_routes = (app: express.Application) => {
    app.get('/users', index);
    app.post('/login', login);
    app.post('/users/create', create);
};

export default users_routes;

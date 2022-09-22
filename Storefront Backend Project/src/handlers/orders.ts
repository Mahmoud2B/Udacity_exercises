import express, { Request, Response } from 'express';
import { Order, OrderStore } from '../models/order';

const store = new OrderStore();

const index = async (_req: Request, res: Response) => {
    try {
        const orders = await store.index();
        res.json(orders);
    } catch (error) {
        res.status(400).send(`Something went wrong! ${error}`);
    }
};

const create = async (req: Request, res: Response) => {
    try {
        console.log(req.body);

        const order = await store.create(req.body.userID);
        res.json(order);
    } catch (error) {
        res.status(400).send(`Something went wrong! ${error}`);
    }
};
const show = async (req: Request, res: Response) => {
    try {
        const order = await store.show(parseInt(req.params.id));

        res.json(order);
    } catch (error) {
        res.status(400).send(`Something went wrong! ${error}`);
    }
};

const orders_routes = (app: express.Application) => {
    app.get('/orders', index);
    app.post('/orders/create', create);
    app.get('/orders/:id', show);
};

export default orders_routes;

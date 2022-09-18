import express, { Request, Response } from "express";
import { User, UserStore } from "../models/user";

const store = new UserStore();

const index = async (_req: Request, res: Response) => {
  const users = await store.index();
  res.json(users);
};
const create = async (req: Request, res: Response) => {
  try {
    const user: User = {
      name: req.body.name,
      password: req.body.password,
      username: req.body.username
    };
    const createdUser = await store.create(user);
    res.json(createdUser);
  } catch (error) {
    console.log(error);
  }
};

const users_routes = (app: express.Application) => {
  app.get("/users", index);
  app.post("/users/create", create);
};

export default users_routes;

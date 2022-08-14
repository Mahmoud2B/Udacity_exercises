import express from "express";
import customersRoutes from "./customers/customers";

const routes = express.Router();

routes.use("/customers", customersRoutes);

routes.get("/api", (req, res) => {
  res.send("Index route Ready");
});

export default routes;

import express from "express";

const customersRoutes = express.Router();

customersRoutes.get(
  "/",
  (req,res,next) => {
    console.log("Middle");
    next();
  },
  (req, res) => {
    res.send("Customers Index route Ready");
  }
);

customersRoutes.get("/id", (req, res) => {
  res.send("Here's one Customer");
});

export default customersRoutes;

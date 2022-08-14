"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var customersRoutes = express_1.default.Router();
customersRoutes.get("/", function (req, res, next) {
    console.log("Middle");
    next();
}, function (req, res) {
    res.send("Customers Index route Ready");
});
customersRoutes.get("/id", function (req, res) {
    res.send("Here's one Customer");
});
exports.default = customersRoutes;

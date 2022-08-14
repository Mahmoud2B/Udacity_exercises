"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var customers_1 = __importDefault(require("./customers/customers"));
var routes = express_1.default.Router();
routes.use("/customers", customers_1.default);
routes.get("/api", function (req, res) {
    res.send("Index route Ready");
});
exports.default = routes;

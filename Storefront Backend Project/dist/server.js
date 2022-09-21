"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var pg_1 = require("pg");
var body_parser_1 = __importDefault(require("body-parser"));
var products_1 = __importDefault(require("./handlers/products"));
var categories_1 = __importDefault(require("./handlers/categories"));
var users_1 = __importDefault(require("./handlers/users"));
var app = (0, express_1.default)();
var port = 3000;
//This is to parse numbers that comes from pg
pg_1.types.setTypeParser(1700, function (val) {
    return parseFloat(val);
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send('Hello');
});
(0, products_1.default)(app);
(0, categories_1.default)(app);
(0, users_1.default)(app);
app.listen(port, function () {
    console.log("Server started at http://localhost:".concat(port));
});
exports.default = app;

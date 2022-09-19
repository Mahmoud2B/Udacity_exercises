"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mythical_wapons_1 = __importDefault(require("./handlers/mythical_wapons"));
var users_1 = __importDefault(require("./handlers/users"));
var app = (0, express_1.default)();
var port = 3001;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.send("Hello");
});
(0, mythical_wapons_1.default)(app);
(0, users_1.default)(app);
app.listen(port, function () {
    console.log("Server started at http://localhost:".concat(port));
});
exports.default = app;

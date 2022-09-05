"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_processor_1 = __importDefault(require("../middleware/image-processor"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send("Server is working");
});
routes.get('/api/image', image_processor_1.default);
exports.default = routes;

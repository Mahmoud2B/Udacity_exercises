"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DATABASE = _a.POSTGRES_DATABASE, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_DATABASE_TEST = _a.POSTGRES_DATABASE_TEST, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, ENV = _a.ENV;
var client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: ENV === 'dev' ? POSTGRES_DATABASE : POSTGRES_DATABASE_TEST,
    user: POSTGRES_USER,
    port: 5432,
    password: POSTGRES_PASSWORD
});
exports.default = client;

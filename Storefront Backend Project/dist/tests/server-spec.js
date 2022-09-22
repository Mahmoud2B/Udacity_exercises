"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
//This is to parse numbers that comes from pg
pg_1.types.setTypeParser(1700, function (val) {
    return parseFloat(val);
});

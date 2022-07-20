"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../../utilities/arrays"));
describe("concatArr tests", function () {
    var arr1 = ["ahmed", "mohammed", "yahya"];
    var arr2 = ["soma", "rokaa", "sara"];
    it("connects two arrays", function () {
        expect(arrays_1.default.concatArr(arr1, arr2)).toEqual([
            "ahmed",
            "mohammed",
            "yahya",
            "soma",
            "rokaa",
            "sara",
        ]);
    });
});

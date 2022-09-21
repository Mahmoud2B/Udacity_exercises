"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("../../models/product");
var store = new product_1.ProductStore();
describe('Test Product Model', function () {
    it('should have an index method', function () {
        expect(store.index).toBeDefined();
    });
    it('should have a show method', function () {
        expect(store.show).toBeDefined();
    });
    it('should have a create method', function () {
        expect(store.create).toBeDefined();
    });
    // it('create method should add a book', async () => {
    //     let product: Product = {
    //         id:1,
    //         category_id: 1,
    //         name: 'Iphone 14 pro max',
    //         price: 1100
    //     };
    //     const result = await store.create(product);
    //     expect(result).toEqual(product);
    // });
});

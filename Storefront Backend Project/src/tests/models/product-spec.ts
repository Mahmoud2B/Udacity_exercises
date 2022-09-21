import { Product, ProductStore } from '../../models/product';

const store = new ProductStore();

describe('Test Product Model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });

    it('should have a create method', () => {
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

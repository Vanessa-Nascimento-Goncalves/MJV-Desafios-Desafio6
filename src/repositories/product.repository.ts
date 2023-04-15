import { IProduct, Product } from '../models/product.model';

class ProductRepository {
    getAll() {
        return Product.find();
    }

    getById(id: number) {
        return Product.findOne({ id: id});
    }

    create(product: IProduct) {
        return Product.create(product);
    }

    update(id: number, product: Partial<IProduct>) {
        return Product.updateOne({ id: id }, { $set: product });
    }

    remove(id: number) {
        return Product.deleteOne({ id: id });
    }
}

export default new ProductRepository();
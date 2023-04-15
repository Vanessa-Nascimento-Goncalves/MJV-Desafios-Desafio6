import { IProduct, Product } from '../models/product.model';
import ProductRepository from '../repositories/product.repository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class ProductsService {

    getAll() {
      return ProductRepository.getAll();
    }

    getByID(id: number) {
        return ProductRepository.getById(id);
    }

    async create(product: IProduct) {
        if(product.password){
            product.password = await bcrypt.hash(product.password, 10);
        }
        return ProductRepository.create(product);
    }

    async authorization(id: number, password: string) {
        const product = await ProductRepository.getById(id);

        if(!product) throw new Error('Produto não encontrado');

        const result = await bcrypt.compare(password, product.password);

        if(result) {
            return jwt.sign({ id: product.id, _id: product.id } , secretJWT, {
                expiresIn: '1h'
            });
        };

        throw new Error('Falha na autenticação!')
    }

    remove(id: number) {
      return ProductRepository.remove(id);
        
       
      /*const productIndex = this.products.findIndex((product) => product.id === id);

        if (productIndex === -1){
            throw new Error("Produto não encontrado!");
        }
        this.products.splice(productIndex, 1);*/
    }

    update(id: number, product: Partial<IProduct>) {
        return ProductRepository.update(id, product);
      
      /*const productIndex = this.products.findIndex((product) => product.id === id);
        if (productIndex === -1){
            throw new Error("Produto não encontrado!");
        }
        this.products [productIndex] = product;*/
    }
}

export default new ProductsService();
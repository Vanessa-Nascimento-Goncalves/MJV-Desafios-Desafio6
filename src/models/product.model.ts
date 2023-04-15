
import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export interface IProduct {
    id: number;
    password: string;
    description: string;
    img: string; 
    price: number;
    quantity: number;
    createdAt: string | Date;
}

export const productSchema = new Schema<IProduct>({
    id: {
        type: Number
    },
    password: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

});

export const Product = mongoose.model<IProduct>('Product', productSchema);

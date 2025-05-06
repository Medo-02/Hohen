import { Category } from "./category";

export interface ProductImage {
  id: number;
  imageUrl: string;
}


export class Product {
    constructor(
        public name: string,
        public description: string,
        public unitPrice: number,
        public active: boolean,
        public unitsInStock: number,
        public dateCreated: Date,
        public lastUpdated: Date,
        public productImages: ProductImage[],
        public category: Category,
    ) {}
}

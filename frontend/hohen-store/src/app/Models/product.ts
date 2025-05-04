export interface ProductImage {
  id: number;
  imageUrl: string;
}

export interface Category {
  id: number;
  categoryName: string;
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

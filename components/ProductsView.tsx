import { Category, Product } from '@/sanity.types';
import React from 'react';

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
  return (
    <div>
      {/* Categories */}
      <div className="w-full sn:w[200px]">
        {/* <CategorySelectorComponent categories={categories} /> */}
      </div>
      {/* Products */}
      <div>
        <div>
          <ProductGrid products={products} />
          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;

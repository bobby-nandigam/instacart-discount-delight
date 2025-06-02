
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../pages/Index';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Fresh Products</h2>
        <p className="text-gray-600">Delivered in 10-15 minutes</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <span className="text-6xl">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500">Try searching for something else</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;


import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Product } from '../pages/Index';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const hasDiscount = product.discount && product.originalPrice;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 group hover:scale-105">
      {/* Discount Badge */}
      {hasDiscount && (
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-swiggy-green text-white px-2 py-1 rounded-full text-xs font-semibold">
            {product.discount}% OFF
          </span>
        </div>
      )}
      
      {/* Product Image */}
      <div className="relative mb-3">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>
      
      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-xs text-gray-500">{product.unit}</p>
        
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-gray-600">{product.rating}</span>
          </div>
        )}
        
        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-gray-800">₹{product.price}</span>
          {hasDiscount && (
            <span className="text-xs text-gray-500 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <Button 
          onClick={() => onAddToCart(product)}
          className="w-full bg-white border-2 border-swiggy-orange text-swiggy-orange hover:bg-swiggy-orange hover:text-white transition-colors"
          size="sm"
        >
          <Plus className="w-4 h-4 mr-1" />
          ADD
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

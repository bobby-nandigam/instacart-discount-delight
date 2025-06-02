
import React, { useState } from 'react';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import DiscountBanner from '../components/DiscountBanner';
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  unit: string;
  rating?: number;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Fresh Bananas",
      price: 40,
      originalPrice: 50,
      discount: 20,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      category: "fruits",
      unit: "1 kg",
      rating: 4.3,
      inStock: true
    },
    {
      id: 2,
      name: "Organic Tomatoes",
      price: 60,
      originalPrice: 80,
      discount: 25,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      category: "vegetables",
      unit: "500g",
      rating: 4.5,
      inStock: true
    },
    {
      id: 3,
      name: "Amul Fresh Milk",
      price: 30,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      category: "dairy",
      unit: "500ml",
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: "Red Apples",
      price: 120,
      originalPrice: 150,
      discount: 20,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      category: "fruits",
      unit: "1 kg",
      rating: 4.2,
      inStock: true
    },
    {
      id: 5,
      name: "Green Spinach",
      price: 25,
      originalPrice: 35,
      discount: 29,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      category: "vegetables",
      unit: "250g",
      rating: 4.1,
      inStock: true
    },
    {
      id: 6,
      name: "Paneer",
      price: 90,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      category: "dairy",
      unit: "200g",
      rating: 4.6,
      inStock: true
    },
    {
      id: 7,
      name: "Orange Carrots",
      price: 35,
      originalPrice: 45,
      discount: 22,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      category: "vegetables",
      unit: "500g",
      rating: 4.3,
      inStock: true
    },
    {
      id: 8,
      name: "Greek Yogurt",
      price: 65,
      originalPrice: 80,
      discount: 19,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      category: "dairy",
      unit: "400g",
      rating: 4.4,
      inStock: true
    }
  ];

  const addToCart = (product: Product) => {
    console.log('Adding to cart:', product.name);
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <div className="pt-20">
        <DiscountBanner />
        <CategoryNav 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <ProductGrid 
          products={filteredProducts}
          onAddToCart={addToCart}
        />
      </div>

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
};

export default Index;

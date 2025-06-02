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
    // Fruits
    {
      id: 1,
      name: "Fresh Bananas",
      price: 40,
      originalPrice: 50,
      discount: 20,
      image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=400&fit=crop",
      category: "fruits",
      unit: "1 kg",
      rating: 4.3,
      inStock: true
    },
    {
      id: 2,
      name: "Red Apples",
      price: 120,
      originalPrice: 150,
      discount: 20,
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop",
      category: "fruits",
      unit: "1 kg",
      rating: 4.2,
      inStock: true
    },
    {
      id: 3,
      name: "Fresh Oranges",
      price: 80,
      originalPrice: 100,
      discount: 20,
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop",
      category: "fruits",
      unit: "1 kg",
      rating: 4.4,
      inStock: true
    },
    {
      id: 4,
      name: "Green Grapes",
      price: 90,
      originalPrice: 110,
      discount: 18,
      image: "https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?w=400&h=400&fit=crop",
      category: "fruits",
      unit: "500g",
      rating: 4.5,
      inStock: true
    },
    
    // Vegetables
    {
      id: 5,
      name: "Organic Tomatoes",
      price: 60,
      originalPrice: 80,
      discount: 25,
      image: "https://images.unsplash.com/photo-1546470427-e212b9d3d859?w=400&h=400&fit=crop",
      category: "vegetables",
      unit: "500g",
      rating: 4.5,
      inStock: true
    },
    {
      id: 6,
      name: "Green Spinach",
      price: 25,
      originalPrice: 35,
      discount: 29,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
      category: "vegetables",
      unit: "250g",
      rating: 4.1,
      inStock: true
    },
    {
      id: 7,
      name: "Orange Carrots",
      price: 35,
      originalPrice: 45,
      discount: 22,
      image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=400&fit=crop",
      category: "vegetables",
      unit: "500g",
      rating: 4.3,
      inStock: true
    },
    {
      id: 8,
      name: "Fresh Onions",
      price: 30,
      originalPrice: 40,
      discount: 25,
      image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=400&fit=crop",
      category: "vegetables",
      unit: "1 kg",
      rating: 4.2,
      inStock: true
    },
    {
      id: 9,
      name: "Green Broccoli",
      price: 70,
      originalPrice: 90,
      discount: 22,
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop",
      category: "vegetables",
      unit: "500g",
      rating: 4.4,
      inStock: true
    },
    
    // Dairy
    {
      id: 10,
      name: "Amul Fresh Milk",
      price: 30,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
      category: "dairy",
      unit: "500ml",
      rating: 4.7,
      inStock: true
    },
    {
      id: 11,
      name: "Paneer",
      price: 90,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop",
      category: "dairy",
      unit: "200g",
      rating: 4.6,
      inStock: true
    },
    {
      id: 12,
      name: "Greek Yogurt",
      price: 65,
      originalPrice: 80,
      discount: 19,
      image: "https://images.unsplash.com/photo-1571212515416-cf04fe27bd40?w=400&h=400&fit=crop",
      category: "dairy",
      unit: "400g",
      rating: 4.4,
      inStock: true
    },
    {
      id: 13,
      name: "Fresh Butter",
      price: 85,
      originalPrice: 100,
      discount: 15,
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop",
      category: "dairy",
      unit: "200g",
      rating: 4.3,
      inStock: true
    },
    
    // Snacks
    {
      id: 14,
      name: "Potato Chips",
      price: 45,
      originalPrice: 55,
      discount: 18,
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop",
      category: "snacks",
      unit: "150g",
      rating: 4.2,
      inStock: true
    },
    {
      id: 15,
      name: "Mixed Nuts",
      price: 180,
      originalPrice: 220,
      discount: 18,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop",
      category: "snacks",
      unit: "250g",
      rating: 4.5,
      inStock: true
    },
    {
      id: 16,
      name: "Dark Chocolate",
      price: 120,
      originalPrice: 140,
      discount: 14,
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop",
      category: "snacks",
      unit: "100g",
      rating: 4.6,
      inStock: true
    },
    {
      id: 17,
      name: "Cookies Pack",
      price: 60,
      originalPrice: 75,
      discount: 20,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
      category: "snacks",
      unit: "200g",
      rating: 4.1,
      inStock: true
    },
    
    // Beverages
    {
      id: 18,
      name: "Orange Juice",
      price: 45,
      originalPrice: 55,
      discount: 18,
      image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400&h=400&fit=crop",
      category: "beverages",
      unit: "500ml",
      rating: 4.3,
      inStock: true
    },
    {
      id: 19,
      name: "Green Tea",
      price: 80,
      originalPrice: 95,
      discount: 16,
      image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=400&fit=crop",
      category: "beverages",
      unit: "100g",
      rating: 4.4,
      inStock: true
    },
    {
      id: 20,
      name: "Coffee Beans",
      price: 150,
      originalPrice: 180,
      discount: 17,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
      category: "beverages",
      unit: "250g",
      rating: 4.7,
      inStock: true
    },
    {
      id: 21,
      name: "Sparkling Water",
      price: 35,
      originalPrice: 45,
      discount: 22,
      image: "https://images.unsplash.com/photo-1624552002407-87dc2799dca4?w=400&h=400&fit=crop",
      category: "beverages",
      unit: "750ml",
      rating: 4.2,
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

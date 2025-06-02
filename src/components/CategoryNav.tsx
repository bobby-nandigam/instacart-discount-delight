
import React from 'react';
import { Button } from './ui/button';

interface CategoryNavProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All', emoji: '🛒' },
  { id: 'fruits', name: 'Fruits', emoji: '🍎' },
  { id: 'vegetables', name: 'Vegetables', emoji: '🥕' },
  { id: 'dairy', name: 'Dairy', emoji: '🥛' },
  { id: 'snacks', name: 'Snacks', emoji: '🍿' },
  { id: 'beverages', name: 'Beverages', emoji: '🥤' }
];

const CategoryNav: React.FC<CategoryNavProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="bg-white py-4 sticky top-20 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => onCategorySelect(category.id)}
              className={`whitespace-nowrap flex items-center space-x-2 ${
                selectedCategory === category.id 
                  ? 'bg-swiggy-orange hover:bg-orange-600 text-white' 
                  : 'hover:bg-swiggy-lightOrange hover:border-swiggy-orange'
              }`}
            >
              <span className="text-lg">{category.emoji}</span>
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;

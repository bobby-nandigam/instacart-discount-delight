
import React from 'react';
import { Gift, Zap } from 'lucide-react';

const DiscountBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-swiggy-orange to-red-500 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Gift className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Super Savings Week!</h2>
              <p className="text-white/90">Up to 30% off on fresh groceries</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-center">
              <div className="flex items-center space-x-1">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-lg font-semibold">FREE</span>
              </div>
              <p className="text-sm text-white/80">Delivery on ₹99+</p>
            </div>
            
            <div className="text-center">
              <span className="text-2xl font-bold">30%</span>
              <p className="text-sm text-white/80">Max Discount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;

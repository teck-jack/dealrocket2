import React from 'react';
import { ChevronRight } from 'lucide-react';

const categories = [
  'Agriculture',
  'Apparel & Accessories',
  'Automobiles & Motorcycles',
  'Beauty',
  'Personal Care',
  'Chemicals',
  'Building & Construction',
  'Consumer Electronics & Components',
  'Electrical Equipment',
  'Solar & Energy',
  'Fashion Accessories',
  'Food & Beverage',
  'Furniture',
  'Gifts & Crafts',
  'Hardware',
  'Health & Medical',
  'Home & Garden',
  'Home Appliances',
  'Lights & Lighting',
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4 bg-white text-red-600 font-bold flex items-center">
        <span className="mr-2">☰</span>
        TOP CATEGORIES
      </div>
      <ul className="py-2">
        {categories.map((category, index) => (
          <li key={index}>
            <a
              href="#"
              className="flex items-center justify-between px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
            >
              {category}
              <ChevronRight className="text-gray-400 group-hover:text-red-600 transition-colors" size={16} />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-[#E94234] font-medium"
          >
            View All →
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

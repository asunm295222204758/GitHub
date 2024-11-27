import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Podcasts",
  "Computer Programming",
  "Cooking",
  "Education",
  "Sports",
  "News",
  "Travel",
  "Comedy",
  "Fitness",
  "Technology",
  "Fashion",
];

const CategoryPills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full z-10">
        <button
          onClick={() => scroll('left')}
          className="h-full aspect-square flex items-center justify-center hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full z-10 flex justify-end">
        <button
          onClick={() => scroll('right')}
          className="h-full aspect-square flex items-center justify-center hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-hidden scroll-smooth mx-12"
      >
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 whitespace-nowrap rounded-lg ${
              selectedCategory === category
                ? "bg-gray-900 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPills;
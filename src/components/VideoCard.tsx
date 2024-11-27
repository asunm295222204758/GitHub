import React from 'react';
import { User } from 'lucide-react';

const VideoCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video">
        <img
          src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74"
          alt="Video thumbnail"
          className="w-full h-full object-cover rounded-xl"
        />
        <span className="absolute bottom-1 right-1 bg-black text-white text-sm px-2 py-0.5 rounded">
          12:34
        </span>
      </div>
      
      <div className="flex gap-2">
        <div className="flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="font-medium line-clamp-2">
            Building a YouTube Clone with React and Tailwind CSS
          </h3>
          <span className="text-sm text-gray-600">Channel Name</span>
          <div className="text-sm text-gray-600">
            <span>123K views</span>
            <span className="mx-1">•</span>
            <span>2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
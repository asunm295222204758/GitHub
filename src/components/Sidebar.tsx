import React from 'react';
import { Home, Compass, PlaySquare, Clock, Upload, History, Flame, ShoppingBag, Music2, Film, Gamepad2, Newspaper, Trophy, Lightbulb } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onNavigate: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onNavigate }) => {
  return (
    <aside 
      className={`fixed left-0 h-full bg-white overflow-y-auto transition-all duration-200 ease-in-out ${
        isOpen ? 'w-64' : 'w-[72px]'
      }`}
    >
      <div className="px-2 py-2">
        <div className="mb-4">
          <SidebarItem 
            icon={<Home className="w-5 h-5" />} 
            text="Home" 
            isOpen={isOpen} 
            onClick={() => onNavigate('/')}
            active 
          />
          <SidebarItem 
            icon={<Compass className="w-5 h-5" />} 
            text="Explore" 
            isOpen={isOpen}
            onClick={() => onNavigate('/explore')}
          />
          <SidebarItem 
            icon={<PlaySquare className="w-5 h-5" />} 
            text="Subscriptions" 
            isOpen={isOpen}
            onClick={() => onNavigate('/subscriptions')}
          />
        </div>

        <div className="border-t border-gray-200 pt-3 mb-4">
          <SidebarItem 
            icon={<History className="w-5 h-5" />} 
            text="History" 
            isOpen={isOpen}
            onClick={() => onNavigate('/history')}
          />
          <SidebarItem 
            icon={<Upload className="w-5 h-5" />} 
            text="Your videos" 
            isOpen={isOpen}
            onClick={() => onNavigate('/studio')}
          />
          <SidebarItem 
            icon={<Clock className="w-5 h-5" />} 
            text="Watch later" 
            isOpen={isOpen}
            onClick={() => onNavigate('/playlist?list=WL')}
          />
        </div>

        {isOpen && (
          <>
            <div className="border-t border-gray-200 pt-3 mb-4">
              <h3 className="px-4 mb-1 text-sm font-medium">Explore</h3>
              <SidebarItem 
                icon={<Flame className="w-5 h-5" />} 
                text="Trending" 
                isOpen={isOpen}
                onClick={() => onNavigate('/trending')}
              />
              <SidebarItem 
                icon={<Music2 className="w-5 h-5" />} 
                text="Music" 
                isOpen={isOpen}
                onClick={() => onNavigate('/music')}
              />
              <SidebarItem 
                icon={<Film className="w-5 h-5" />} 
                text="Movies" 
                isOpen={isOpen}
                onClick={() => onNavigate('/movies')}
              />
              <SidebarItem 
                icon={<Gamepad2 className="w-5 h-5" />} 
                text="Gaming" 
                isOpen={isOpen}
                onClick={() => onNavigate('/gaming')}
              />
              <SidebarItem 
                icon={<Newspaper className="w-5 h-5" />} 
                text="News" 
                isOpen={isOpen}
                onClick={() => onNavigate('/news')}
              />
              <SidebarItem 
                icon={<Trophy className="w-5 h-5" />} 
                text="Sports" 
                isOpen={isOpen}
                onClick={() => onNavigate('/sports')}
              />
              <SidebarItem 
                icon={<Lightbulb className="w-5 h-5" />} 
                text="Learning" 
                isOpen={isOpen}
                onClick={() => onNavigate('/learning')}
              />
            </div>

            <div className="px-4 pt-2 text-xs text-gray-600">
              <p className="mb-3">
                About Press Copyright Contact us Creators Advertise Developers
              </p>
              <p className="mb-3">
                Terms Privacy Policy & Safety How OurTube works Test new features
              </p>
              <p className="text-gray-400">© 2024 Google LLC</p>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isOpen, active, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-5 p-3 rounded-lg transition-colors duration-200 
        ${active 
          ? 'bg-gray-100 hover:bg-gray-200' 
          : 'hover:bg-gray-100'
        }
        ${!isOpen && 'justify-center'}
      `}
    >
      <div className={`flex-shrink-0 ${active ? 'text-gray-800' : 'text-gray-600'}`}>
        {icon}
      </div>
      {isOpen && (
        <span className={`text-sm whitespace-nowrap overflow-hidden ${
          active ? 'font-medium' : ''
        }`}>
          {text}
        </span>
      )}
    </button>
  );
};

export default Sidebar;
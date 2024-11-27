import React, { useState } from 'react';
import { Menu, Search, Bell, Video, User, PlaySquare } from 'lucide-react';
import Sidebar from './components/Sidebar';
import VideoCard from './components/VideoCard';
import CategoryPills from './components/CategoryPills';
import LoginModal from './components/LoginModal';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    // In a real app, we would use a router here
    window.history.pushState({}, '', path);
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <VideoCard key={i} />
            ))}
          </div>
        );
      case '/explore':
        return (
          <div className="grid gap-6">
            {['Trending', 'Music', 'Gaming', 'News', 'Sports', 'Learning'].map((category) => (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-4">{category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <VideoCard key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case '/studio':
        return (
          <div className="text-center p-8">
            <Video className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold mb-2">Upload a video</h2>
            <p className="text-gray-600 mb-4">Share your videos with the world</p>
            <label className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer">
              SELECT FILES
              <input type="file" className="hidden" accept="video/*" />
            </label>
          </div>
        );
      case '/history':
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Watch history</h2>
            <div className="space-y-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg">
                  <VideoCard />
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold">Content coming soon!</h2>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className="hover:bg-gray-100 p-2 rounded-full w-10 h-10 flex items-center justify-center"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button onClick={() => handleNavigate('/')} className="flex items-center">
              <PlaySquare className="w-8 h-8 text-red-600" />
              <span className="ml-1 text-xl font-semibold">OurTube</span>
            </button>
          </div>
          
          <div className="flex-grow max-w-2xl mx-4">
            <div className="flex">
              <div className="flex-grow">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:border-blue-500 focus:outline-none"
                  />
                  <button className="px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hover:bg-gray-100 p-2 rounded-full">
              <Video className="w-6 h-6" />
            </button>
            <button className="hover:bg-gray-100 p-2 rounded-full">
              <Bell className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-full hover:bg-gray-100"
            >
              <User className="w-5 h-5" />
              <span>Sign in</span>
            </button>
          </div>
        </div>
        {currentPath === '/' && (
          <div className="px-4 pb-2">
            <CategoryPills />
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="flex pt-[116px]">
        <Sidebar isOpen={isSidebarOpen} onNavigate={handleNavigate} />
        
        <main className={`flex-grow p-4 ${isSidebarOpen ? 'ml-64' : 'ml-[72px]'} transition-all duration-200`}>
          {renderContent()}
        </main>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
}

export default App;
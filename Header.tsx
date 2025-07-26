import React from 'react';
import { Play } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`flex justify-center py-8 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-black flex items-center justify-center">
          <Play className="w-3 h-3 text-white fill-white" />
        </div>
        <span className="text-xl font-medium text-black">Sui Send</span>
      </div>
    </header>
  );
};
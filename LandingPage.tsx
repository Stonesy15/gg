import React, { useState } from 'react';
import { Upload, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';

interface LandingPageProps {
  onFileUpload: (files: FileList) => void;
  onNavigateToAuth: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onFileUpload,
  onNavigateToAuth
}) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files) {
      onFileUpload(e.dataTransfer.files);
      onNavigateToAuth();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFileUpload(e.target.files);
      onNavigateToAuth();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-6xl lg:text-7xl font-bold text-black mb-4 leading-tight">
            Send it. Own it. On Chain
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Powered by Sui
          </p>
        </div>

        {/* Upload Section */}
        <div className="w-full max-w-lg">
          <div
            className={`relative border-2 border-dashed rounded-2xl p-16 text-center transition-all duration-200 ${
              isDragOver
                ? 'border-black bg-gray-100'
                : 'border-gray-300 bg-white hover:border-gray-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              onChange={handleFileInputChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="file-upload"
            />
            
            <div className="flex flex-col items-center gap-4">
              <Button
                asChild
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
              >
                <label htmlFor="file-upload" className="cursor-pointer">
                  <ImageIcon className="w-4 h-4" />
                  Upload File
                </label>
              </Button>
              
              <p className="text-gray-600 text-sm">
                or drag and drop a file
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Plus, Upload } from 'lucide-react';
import MainLayout from './MainLayout';
import { Button } from '@/components/ui/button';
import { FileData } from '@/types';

interface FileListScreenProps {
  files: FileData[];
  walletAddress?: string;
  onAddMoreFiles?: () => void;
  onStartUpload?: () => void;
}

const FileListScreen: React.FC<FileListScreenProps> = ({ 
  files, 
  walletAddress,
  onAddMoreFiles,
  onStartUpload
}) => {
  return (
    <MainLayout walletAddress={walletAddress}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-blue-50 rounded-lg px-4 py-2 mb-8 inline-block">
          <span className="text-blue-600 text-sm font-medium">Added Files</span>
        </div>
        
        <div className="space-y-4 mb-16">
          {files.map((file) => (
            <div key={file.id} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-black text-base">{file.name}</span>
                </div>
                <div className="w-5 h-5 border border-gray-300 rounded bg-white"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-8">
          <Button
            variant="ghost"
            onClick={onAddMoreFiles}
            className="text-blue-600 hover:text-blue-700 hover:bg-transparent font-medium text-base p-0 h-auto"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add more files
          </Button>
          
          <Button
            onClick={onStartUpload}
            className="bg-black hover:bg-gray-800 text-white rounded-lg px-8 py-3 font-medium text-base h-auto"
          >
            <Upload className="w-4 h-4 mr-2" />
            Start Upload
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default FileListScreen;
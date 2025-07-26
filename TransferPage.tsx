import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/layout/Header';
import { FileUpload, TransferConfig } from '@/types';
import { Plus, ArrowUpRight, Copy, Wallet as WalletIcon } from 'lucide-react';

interface TransferPageProps {
  uploadedFiles: FileUpload[];
  onAddFiles: () => void;
  onTransfer: (config: TransferConfig) => void;
}

const getFileIcon = (type: FileUpload['type']) => {
  switch (type) {
    case 'image':
      return '🖼️';
    case 'audio':
      return '🎵';
    case 'video':
      return '🎬';
    default:
      return '📄';
  }
};

export const TransferPage: React.FC<TransferPageProps> = ({
  uploadedFiles,
  onAddFiles,
  onTransfer
}) => {
  const [config, setConfig] = useState<TransferConfig>({
    transferType: 'email',
    encryptionEnabled: false,
    recipient: '',
    title: '',
    message: '',
    duration: '3 Days'
  });

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (config.recipient && config.title) {
      onTransfer(config);
    }
  };

  const updateConfig = (updates: Partial<TransferConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Wallet Header */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
            <WalletIcon className="w-4 h-4" />
            <span className="font-medium">Wallet</span>
            <Copy className="w-4 h-4" />
          </div>
          <span className="text-gray-600 font-medium">ddkKKj.....uwoo</span>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-2">
            Setup Encryption
          </h1>
          <p className="text-lg text-gray-400">
            Powered by Sui
          </p>
        </div>

        <form onSubmit={handleTransfer} className="space-y-8">
          {/* Upload Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Uploaded file
              </div>
            </div>
            
            <div className="space-y-3">
              {uploadedFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{getFileIcon(file.type)}</span>
                    <span className="text-sm font-medium text-gray-900">
                      {file.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getFileIcon(file.type)}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              type="button"
              onClick={onAddFiles}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 mt-4"
            >
              <Plus className="w-4 h-4" />
              Add more files
            </button>
          </div>

          {/* Access Control Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-6">
              Access Control
            </div>

            {/* Access Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select your access type (e.g Wallet, NFT, SBT, Email)
              </label>
              <Select
                value={config.transferType}
                onValueChange={(value: any) => updateConfig({ transferType: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select access type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="wallet">Wallet</SelectItem>
                  <SelectItem value="nft">NFT</SelectItem>
                  <SelectItem value="sbt">SBT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Access Toggle */}
            <div className="flex gap-2 mb-6">
              <Button
                type="button"
                variant={!config.encryptionEnabled ? "default" : "outline"}
                size="sm"
                onClick={() => updateConfig({ encryptionEnabled: false })}
                className={!config.encryptionEnabled ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}
              >
                Add
              </Button>
              <Button
                type="button"
                variant={config.encryptionEnabled ? "default" : "outline"}
                size="sm"
                onClick={() => updateConfig({ encryptionEnabled: true })}
                className={config.encryptionEnabled ? "bg-black hover:bg-gray-800 text-white" : ""}
              >
                Email
              </Button>
            </div>

            {/* Send To */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Send to
                </label>
                <span className="text-xs text-gray-500">0 of 5</span>
              </div>
              <Input
                placeholder="Enter email address"
                value={config.recipient}
                onChange={(e) => updateConfig({ recipient: e.target.value })}
                className="w-full"
                required
              />
            </div>

            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <Input
                placeholder="Give your transfer a title"
                value={config.title}
                onChange={(e) => updateConfig({ title: e.target.value })}
                className="w-full"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                placeholder="Optional"
                value={config.message}
                onChange={(e) => updateConfig({ message: e.target.value })}
                className="w-full resize-none"
                rows={3}
              />
            </div>

            {/* Duration */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1">
                <Select
                  value={config.duration}
                  onValueChange={(value: any) => updateConfig({ duration: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 Day">1 Day</SelectItem>
                    <SelectItem value="3 Days">3 Days</SelectItem>
                    <SelectItem value="7 Days">7 Days</SelectItem>
                    <SelectItem value="30 Days">30 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>

            {/* Send Button */}
            <Button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2"
            >
              Send
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
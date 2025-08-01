import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/layout/Header';

interface AuthPageProps {
  onAuthenticate: (email?: string) => void;
  onSlushWalletConnect?: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ 
  onAuthenticate, 
  onSlushWalletConnect 
}) => {
  const [email, setEmail] = useState('');

  const handleGoogleAuth = () => {
    // Simulate Google authentication
    onAuthenticate();
  };

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onAuthenticate(email);
    }
  };

  const handleWalletConnect = () => {
    // Redirect to landing page instead of wallet page
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="text-3xl font-bold text-black text-center mb-12">
            It take 5 seconds to create an account
          </h1>

          {/* Google Auth Button */}
          <Button
            onClick={handleGoogleAuth}
            className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-lg font-medium flex items-center justify-center gap-3 mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-600 text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Connect Wallet Button */}
          <Button
            onClick={handleWalletConnect}
            variant="outline"
            className="w-full py-4 rounded-lg font-medium border-gray-300 text-gray-700 hover:bg-gray-50 mb-8"
          >
            Connect your wallet
          </Button>

          {/* Terms and Support */}
          <div className="text-center text-sm text-gray-600 space-y-2">
            <p>
              By using this website, you agree to our{' '}
              <a href="#" className="text-black hover:underline">
                Terms of Use
              </a>{' '}
              and our{' '}
              <a href="#" className="text-black hover:underline">
                Privacy Policy
              </a>
              .
            </p>
            <p>
              Need help? Reach out to us at{' '}
              <a
                href="mailto:support@suiquest.com"
                className="text-black hover:underline"
              >
                support@suiquest.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
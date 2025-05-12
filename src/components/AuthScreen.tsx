
import React from 'react';
import { Button } from "@/components/ui/button";

interface AuthScreenProps {
  onGoogleAuth: () => void;
  onLinkedInAuth: () => void;
}

const AuthScreen = ({ onGoogleAuth, onLinkedInAuth }: AuthScreenProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC]">
      <div className="card w-full max-w-md animate-slide-up">
        <div className="flex justify-center mb-6">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#4A6CFA" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z" stroke="#4A6CFA" strokeWidth="2"/>
            <path d="M9 12H15" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 16H15" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-2">Welcome to HireKit</h2>
        <p className="text-gray-600 text-center mb-8">Sign in to start optimizing your resume</p>
        
        <div className="space-y-4">
          <Button 
            onClick={onGoogleAuth}
            variant="outline" 
            className="w-full py-6 border-gray-300 hover:bg-gray-50 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
              <path d="M3.15302 7.3455L6.43852 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z" fill="#FF3D00"/>
              <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z" fill="#4CAF50"/>
              <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
            </svg>
            Continue with Google
          </Button>
          
          <Button 
            onClick={onLinkedInAuth}
            variant="outline" 
            className="w-full py-6 border-gray-300 hover:bg-gray-50 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452Z"/>
            </svg>
            Continue with LinkedIn
          </Button>
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-8">
          By continuing, you agree to HireKit's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default AuthScreen;

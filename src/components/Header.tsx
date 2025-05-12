
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  isAuthenticated?: boolean;
  onAuthClick?: () => void;
  userName?: string;
}

const Header = ({
  isAuthenticated = false,
  onAuthClick,
  userName
}: HeaderProps) => {
  return (
    <header className="w-full bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#4A6CFA" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z" stroke="#4A6CFA" strokeWidth="2"/>
            <path d="M9 12H15" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 16H15" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <h1 className="text-lg md:text-xl font-bold text-secondary">HireKit</h1>
        </div>
        
        {isAuthenticated ? (
          <div className="flex items-center space-x-3">
            <span className="hidden md:block text-sm font-medium">{userName || 'User'}</span>
            <Avatar className="h-8 w-8 bg-primary cursor-pointer">
              <AvatarFallback>{userName ? userName[0].toUpperCase() : 'U'}</AvatarFallback>
            </Avatar>
          </div>
        ) : (
          <Button 
            onClick={onAuthClick}
            className="bg-primary hover:bg-primary-hover text-white"
          >
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;

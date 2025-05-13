import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  onAuthClick?: () => void;
}

const Navigation = ({ onAuthClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Check scroll position to add backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#4A6CFA" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z" stroke="#4A6CFA" strokeWidth="2"/>
              <path d="M9 12H15" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 16H15" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h1 className="text-lg md:text-xl font-bold text-secondary">HireKit</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Features Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
                onClick={() => toggleDropdown('features')}
              >
                Features <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'features' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-50"
                  >
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">ATS Optimizer</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Keyword Matcher</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Format Preserver</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Templates</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/5"
              onClick={onAuthClick}
            >
              Sign In
            </Button>
            <Button 
              className="bg-primary hover:bg-primary-hover text-white"
              onClick={onAuthClick}
            >
              Upload
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                <button 
                  className="flex items-center justify-between w-full py-2 text-left"
                  onClick={() => toggleDropdown('mobileFeatures')}
                >
                  <span>Features</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobileFeatures' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'mobileFeatures' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      <a href="#" className="block py-2 text-gray-600">ATS Optimizer</a>
                      <a href="#" className="block py-2 text-gray-600">Keyword Matcher</a>
                      <a href="#" className="block py-2 text-gray-600">Format Preserver</a>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <a href="#" className="block py-2">Templates</a>
                <a href="#" className="block py-2">Pricing</a>
                <a href="#" className="block py-2">Blog</a>
                
                <div className="pt-2 flex flex-col space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary"
                    onClick={onAuthClick}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="w-full bg-primary text-white"
                    onClick={onAuthClick}
                  >
                    Upload
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;

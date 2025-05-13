
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-secondary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z" stroke="white" strokeWidth="2"/>
                <path d="M9 12H15" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 16H15" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h1 className="text-lg font-bold">HireKit</h1>
            </div>
            <p className="text-sm text-gray-300">Making job applications simpler and more effective.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Use Cases</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-sm text-gray-300 text-center">
          &copy; {new Date().getFullYear()} HireKit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

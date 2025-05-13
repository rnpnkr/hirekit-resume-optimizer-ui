import React from 'react';
import { motion } from "framer-motion";

const FooterSection = () => {
  const footerLinks = {
    product: [
      { title: "Features", href: "#features" },
      { title: "Pricing", href: "#" },
      { title: "Templates", href: "#" },
      { title: "Integrations", href: "#" }
    ],
    company: [
      { title: "About", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Contact", href: "#" }
    ],
    resources: [
      { title: "Guide to ATS", href: "#" },
      { title: "Resume Templates", href: "#" },
      { title: "Job Search Tips", href: "#" },
      { title: "Career Resources", href: "#" }
    ],
    support: [
      { title: "Help Center", href: "#" },
      { title: "FAQs", href: "#" },
      { title: "Contact Support", href: "#" },
      { title: "Status", href: "#" }
    ],
    legal: [
      { title: "Terms of Service", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Cookie Policy", href: "#" },
      { title: "GDPR Compliance", href: "#" }
    ]
  };

  const footerSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const footerItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-[#F5F5F7] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          variants={footerSectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info Column - Takes 2 Grid Spaces */}
          <motion.div className="lg:col-span-2" variants={footerItemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#4A6CFA" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z" stroke="#4A6CFA" strokeWidth="2"/>
                <path d="M9 12H15" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 16H15" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h1 className="text-xl font-bold">HireKit</h1>
            </div>
            <p className="text-gray-600 mb-6 max-w-xs">
              AI-powered resume tailoring that gets you past ATS screens and increases interview chances.
            </p>
          </motion.div>
          
          {/* Product Links */}
          <motion.div variants={footerItemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <motion.li 
                  key={`product-${index}`}
                  variants={footerItemVariants}
                  className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                >
                  <a href={link.href}>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Company Links */}
          <motion.div variants={footerItemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={`company-${index}`}
                  variants={footerItemVariants}
                  className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                >
                  <a href={link.href}>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Resources Links */}
          <motion.div variants={footerItemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <motion.li 
                  key={`resources-${index}`}
                  variants={footerItemVariants}
                  className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                >
                  <a href={link.href}>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Legal Links */}
          <motion.div variants={footerItemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <motion.li 
                  key={`legal-${index}`}
                  variants={footerItemVariants}
                  className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                >
                  <a href={link.href}>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-300 mt-12 pt-6 text-sm text-gray-500 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          &copy; {new Date().getFullYear()} HireKit. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;

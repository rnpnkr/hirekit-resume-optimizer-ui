
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onGetStarted: () => void;
  onScrollToDemo: () => void;
}

const HeroSection = ({ onGetStarted, onScrollToDemo }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F6] py-16 md:py-24 overflow-hidden">
      <div className="absolute opacity-20 top-0 left-0 w-full h-full">
        <div className="absolute w-40 h-40 bg-primary rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-40 h-40 bg-accent rounded-full blur-3xl top-20 right-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary">AI-Powered Resume Tailoring </span>
              <span className="text-primary">That Gets You Past ATS Screens</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-4 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our AI agents analyze job descriptions and optimize your resume to 
              <span className="bg-accent/20 text-accent font-semibold px-2 py-1 ml-1 rounded">
                increase interview chances by 3x
              </span>
            </motion.p>
            
            <motion.p 
              className="text-md text-gray-500 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              One resume, optimized for multiple job descriptions - without losing your original formatting.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button 
                  onClick={onGetStarted}
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-6 text-lg relative z-10"
                >
                  Upload Your Resume <ArrowRight className="ml-2" />
                </Button>
                <div className="absolute inset-0 bg-primary rounded-md opacity-30 animate-ping duration-1000 z-0"></div>
              </motion.div>
              
              <Button 
                onClick={onScrollToDemo}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 py-6 text-lg"
              >
                See How It Works <ChevronDown className="ml-2" />
              </Button>
            </motion.div>
            <p className="mt-2 text-sm text-gray-500">No credit card required</p>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative max-w-md">
              <motion.div 
                className="absolute -top-6 -left-6 w-full h-full bg-accent rounded-xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              ></motion.div>
              <div className="bg-white p-4 rounded-xl shadow-lg relative z-10">
                <div className="flex items-center justify-center min-h-[300px]">
                  <img 
                    src="/placeholder.svg" 
                    alt="Resume Tailoring Illustration" 
                    className="w-full h-auto"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center"
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/40 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-primary"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

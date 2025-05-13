
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, Download, Send, Mail } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface PreviewScreenProps {
  onCreateAnother: () => void;
  originalScore: number;
  optimizedScore: number;
}

const PreviewScreen = ({
  onCreateAnother,
  originalScore = 65,
  optimizedScore = 94
}: PreviewScreenProps) => {
  const [activeTab, setActiveTab] = useState<'original' | 'optimized'>('optimized');
  const [showFullScreen, setShowFullScreen] = useState(false);
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Your Optimized Resume</h1>
        <p className="text-gray-600">Your resume has been tailored to match the job description.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Job Description</h2>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-lg mb-3">Frontend Developer</h3>
            <p className="mb-4 text-sm text-gray-500">Tech Solutions Inc • Posted 2 days ago</p>
            
            <h4 className="font-medium mb-2">Requirements:</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>5+ years of experience with <span className="bg-green-100 text-green-700 px-1 rounded">React.js</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Strong <span className="bg-green-100 text-green-700 px-1 rounded">TypeScript</span> knowledge</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Experience with <span className="bg-green-100 text-green-700 px-1 rounded">state management</span> libraries (Redux, MobX)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Knowledge of <span className="bg-green-100 text-green-700 px-1 rounded">responsive design</span> principles</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Resume Preview</h2>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button
                variant={activeTab === 'original' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('original')}
                className={`rounded-lg ${activeTab === 'original' ? 'bg-white shadow-sm' : ''} text-sm`}
              >
                Original
              </Button>
              <Button
                variant={activeTab === 'optimized' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('optimized')}
                className={`rounded-lg ${activeTab === 'optimized' ? 'bg-white shadow-sm' : ''} text-sm`}
              >
                Optimized
              </Button>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-lg">Alex Johnson</h3>
            <p className="text-sm text-gray-600 mb-4">Frontend Developer • alex@example.com • (555) 123-4567</p>
            
            <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-gray-700">Experience</h4>
            <div className="mb-4">
              <p className="font-medium">Senior Developer at TechCorp</p>
              <p className="text-sm text-gray-600 mb-2">2018 - Present</p>
              
              {activeTab === 'original' ? (
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Led frontend development for multiple web applications</li>
                  <li>• Helped improve site performance and user experience</li>
                  <li>• Worked with JavaScript and various frameworks</li>
                  <li>• Designed responsive interfaces for multiple screen sizes</li>
                </ul>
              ) : (
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Led frontend development using <span className="bg-green-100 text-green-700 px-1 rounded">React.js</span> for multiple enterprise web applications</li>
                  <li>• Implemented strongly-typed components with <span className="bg-green-100 text-green-700 px-1 rounded">TypeScript</span>, reducing bugs by 37%</li>
                  <li>• Architected scalable <span className="bg-green-100 text-green-700 px-1 rounded">state management</span> solutions using Redux and Context API</li>
                  <li>• Designed <span className="bg-green-100 text-green-700 px-1 rounded">responsive interfaces</span> using CSS Grid and Flexbox</li>
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white p-6 rounded-xl shadow mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">ATS Compatibility Score</h2>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Original Resume</span>
              <span className="font-medium">{originalScore}%</span>
            </div>
            <Progress value={originalScore} className="h-3 bg-gray-200" />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Optimized Resume</span>
              <span className="font-medium">{optimizedScore}%</span>
            </div>
            <Progress value={optimizedScore} className="h-3 bg-gray-200" />
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap gap-4 justify-center md:justify-between items-center"
      >
        <Button
          onClick={onCreateAnother}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ChevronLeft size={18} />
          Create Another
        </Button>
        
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Mail size={18} />
            Email
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Send size={18} />
            Share
          </Button>
          <Button className="flex items-center gap-2">
            <Download size={18} />
            Download PDF
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default PreviewScreen;

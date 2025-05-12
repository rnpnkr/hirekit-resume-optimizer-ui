
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ProcessingScreenProps {
  onComplete: () => void;
  onCancel: () => void;
}

const ProcessingScreen = ({ onComplete, onCancel }: ProcessingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("Analyzing job description...");
  const [estimatedSeconds, setEstimatedSeconds] = useState(30);
  
  useEffect(() => {
    // Simulate processing progress
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        
        // Update status message based on progress
        if (newProgress === 20) {
          setStatusMessage("Extracting key requirements...");
        } else if (newProgress === 40) {
          setStatusMessage("Matching skills to job description...");
        } else if (newProgress === 60) {
          setStatusMessage("Optimizing resume content...");
        } else if (newProgress === 80) {
          setStatusMessage("Formatting for ATS readability...");
        } else if (newProgress >= 100) {
          setStatusMessage("Resume tailoring complete!");
          clearInterval(interval);
          setTimeout(() => onComplete(), 1000);
        }
        
        // Update estimated time
        setEstimatedSeconds(prev => Math.max(0, prev - 1));
        
        return Math.min(newProgress, 100);
      });
    }, 300);
    
    return () => clearInterval(interval);
  }, [onComplete]);
  
  return (
    <div className="container mx-auto px-4 py-10 max-w-xl">
      <div className="card text-center">
        <div className="mb-6">
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-32 h-32 -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                className="text-gray-200"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className="text-primary"
                strokeWidth="8"
                strokeDasharray={251.2}
                strokeDashoffset={251.2 - (progress / 100) * 251.2}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
            </svg>
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
              <span className="text-2xl font-bold">{progress}%</span>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">Tailoring Your Resume</h2>
        <p className="text-gray-600 mb-6">{statusMessage}</p>
        
        <div className="mb-6 relative">
          <Progress value={progress} className="h-2" />
        </div>
        
        <p className="text-sm text-gray-500 mb-8">
          Estimated time remaining: {Math.floor(estimatedSeconds / 60)}:{(estimatedSeconds % 60).toString().padStart(2, '0')}
        </p>
        
        <div className="animate-pulse mb-8">
          <div className="bg-gray-200 h-3 rounded-full w-3/4 mx-auto mb-3"></div>
          <div className="bg-gray-200 h-3 rounded-full w-1/2 mx-auto"></div>
        </div>
        
        <Button
          variant="outline"
          className="text-gray-500"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ProcessingScreen;

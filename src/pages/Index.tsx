import React, { useState } from 'react';
import Header from '@/components/Header';
import LandingPage from '@/components/LandingPage';
import AuthScreen from '@/components/AuthScreen';
import Dashboard from '@/components/Dashboard';
import ResumeUploadScreen from '@/components/ResumeUploadScreen';
import ProcessingScreen from '@/components/ProcessingScreen';
import PreviewScreen from '@/components/PreviewScreen';
import { useToast } from "@/hooks/use-toast";

// Enum for application flow
enum AppScreen {
  LANDING,
  AUTH,
  DASHBOARD,
  UPLOAD,
  PROCESSING,
  PREVIEW
}

// Sample history data
const sampleHistory = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    company: "Tech Solutions Inc.",
    date: "May 10, 2025",
    atsScore: 92
  },
  {
    id: 2,
    jobTitle: "React Developer",
    company: "Innovative Apps LLC",
    date: "May 5, 2025",
    atsScore: 88
  }
];

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.LANDING);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("Alex");
  const { toast } = useToast();
  
  // Function to handle authentication
  const handleAuthentication = () => {
    // Simulate authentication process
    setIsAuthenticated(true);
    setCurrentScreen(AppScreen.DASHBOARD);
    
    toast({
      title: "Successfully signed in",
      description: "Welcome to HireKit!",
    });
  };
  
  // Function to handle resume upload and processing
  const handleResumeUpload = (jobUrl: string, resumeFile: File) => {
    console.log("Job URL:", jobUrl);
    console.log("Resume File:", resumeFile.name);
    
    // Move to processing screen
    setCurrentScreen(AppScreen.PROCESSING);
  };
  
  // Render the appropriate screen based on the current state
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case AppScreen.LANDING:
        return <LandingPage onGetStarted={() => setCurrentScreen(AppScreen.AUTH)} />;
        
      case AppScreen.AUTH:
        return (
          <AuthScreen 
            onGoogleAuth={handleAuthentication} 
            onLinkedInAuth={handleAuthentication} 
          />
        );
        
      case AppScreen.DASHBOARD:
        return (
          <Dashboard 
            userName={userName}
            onNewResume={() => setCurrentScreen(AppScreen.UPLOAD)}
            history={sampleHistory}
            onViewHistoryItem={(id) => {
              console.log("Viewing history item:", id);
              setCurrentScreen(AppScreen.PREVIEW);
            }}
          />
        );
        
      case AppScreen.UPLOAD:
        return (
          <ResumeUploadScreen 
            onContinue={handleResumeUpload}
            onBack={() => setCurrentScreen(AppScreen.DASHBOARD)}
          />
        );
        
      case AppScreen.PROCESSING:
        return (
          <ProcessingScreen 
            onComplete={() => setCurrentScreen(AppScreen.PREVIEW)}
            onCancel={() => setCurrentScreen(AppScreen.UPLOAD)}
          />
        );
        
      case AppScreen.PREVIEW:
        return (
          <PreviewScreen 
            onCreateAnother={() => setCurrentScreen(AppScreen.UPLOAD)}
            originalScore={65}
            optimizedScore={94}
          />
        );
        
      default:
        return <LandingPage onGetStarted={() => setCurrentScreen(AppScreen.AUTH)} />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {currentScreen !== AppScreen.AUTH && currentScreen !== AppScreen.LANDING && (
        <Header 
          isAuthenticated={isAuthenticated}
          userName={userName}
          onAuthClick={() => setCurrentScreen(AppScreen.AUTH)}
        />
      )}
      {renderCurrentScreen()}
    </div>
  );
};

export default Index;

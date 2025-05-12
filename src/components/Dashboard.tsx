
import React from 'react';
import { Button } from "@/components/ui/button";

interface HistoryItem {
  id: number;
  jobTitle: string;
  company: string;
  date: string;
  atsScore: number;
}

interface DashboardProps {
  userName: string;
  onNewResume: () => void;
  history: HistoryItem[];
  onViewHistoryItem: (id: number) => void;
}

const Dashboard = ({ userName, onNewResume, history, onViewHistoryItem }: DashboardProps) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">Welcome back, {userName}!</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content - new resume button and instructions */}
        <div className="lg:col-span-2">
          <div className="card bg-gradient-to-br from-primary/10 to-accent/5 mb-8">
            <h3 className="text-xl font-semibold mb-4">Ready to optimize your resume?</h3>
            <p className="text-gray-600 mb-6">
              Upload your resume and paste a job URL to get a tailored version that's optimized for ATS systems and matches the job requirements.
            </p>
            <Button 
              onClick={onNewResume}
              className="bg-primary hover:bg-primary-hover text-white"
            >
              New Resume
            </Button>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Tips for success</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 rounded-full p-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4A6CFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Use your full resume</h4>
                    <p className="text-sm text-gray-600">Start with your most comprehensive resume version so our AI has more to work with.</p>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 rounded-full p-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4A6CFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Use exact job URLs</h4>
                    <p className="text-sm text-gray-600">Copy the complete job posting URL for the most accurate matching.</p>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 rounded-full p-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4A6CFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Review suggestions carefully</h4>
                    <p className="text-sm text-gray-600">Always check AI modifications to ensure accuracy and truthfulness.</p>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 rounded-full p-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4A6CFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Keep formatting simple</h4>
                    <p className="text-sm text-gray-600">Clean, simple formatting often passes ATS systems more effectively.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar - history */}
        <div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Recent Resumes</h3>
            
            {history.length > 0 ? (
              <div className="space-y-4">
                {history.map(item => (
                  <div 
                    key={item.id}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-all"
                    onClick={() => onViewHistoryItem(item.id)}
                  >
                    <h4 className="font-medium">{item.jobTitle}</h4>
                    <p className="text-sm text-gray-600 mb-2">{item.company}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{item.date}</span>
                      <span className="text-xs font-medium bg-green-100 text-green-800 rounded-full px-2 py-1">
                        ATS Score: {item.atsScore}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500 mb-4">No resume history yet</p>
                <Button 
                  onClick={onNewResume}
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary/5"
                >
                  Create Your First Resume
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

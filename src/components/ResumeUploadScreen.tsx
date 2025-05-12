
import React, { useState, useRef, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface ResumeUploadScreenProps {
  onContinue: (jobUrl: string, resumeFile: File) => void;
  onBack: () => void;
}

const ResumeUploadScreen = ({ onContinue, onBack }: ResumeUploadScreenProps) => {
  const [jobUrl, setJobUrl] = useState<string>('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [urlError, setUrlError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  const handleJobUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobUrl(e.target.value);
    
    if (urlError && e.target.value) {
      setUrlError('');
    }
  };
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type === 'application/pdf') {
        setResumeFile(file);
      } else {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please upload a PDF file",
        });
      }
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf') {
        setResumeFile(file);
      } else {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please upload a PDF file",
        });
      }
    }
  };
  
  const validateURL = (url: string): boolean => {
    const pattern = /^https?:\/\/[^\s$.?#].[^\s]*$/i;
    return pattern.test(url);
  };
  
  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleContinue = () => {
    let isValid = true;
    
    if (!jobUrl || !validateURL(jobUrl)) {
      setUrlError('Please enter a valid job URL');
      isValid = false;
    }
    
    if (!resumeFile) {
      toast({
        variant: "destructive",
        title: "Resume required",
        description: "Please upload your resume PDF",
      });
      isValid = false;
    }
    
    if (isValid && resumeFile) {
      onContinue(jobUrl, resumeFile);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl animate-slide-up">
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">1</div>
          <div className="w-16 h-1 bg-gray-200">
            <div className="h-full bg-primary" style={{ width: '0%' }}></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-medium">2</div>
          <div className="w-16 h-1 bg-gray-200">
            <div className="h-full bg-primary" style={{ width: '0%' }}></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-medium">3</div>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Tailor Your Resume</h2>
        
        <div className="mb-6">
          <label htmlFor="jobUrl" className="form-label">Job URL</label>
          <Input 
            id="jobUrl" 
            type="text" 
            placeholder="https://jobs.example.com/job-posting" 
            className="input-field"
            value={jobUrl}
            onChange={handleJobUrlChange}
          />
          {urlError && <p className="text-sm text-destructive mt-1">{urlError}</p>}
          <p className="text-xs text-gray-500 mt-1">Example: https://jobs.lever.co/company/job-id</p>
        </div>
        
        <div className="mb-8">
          <label className="form-label">Upload Your Resume</label>
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-300'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {resumeFile ? (
              <div className="flex flex-col items-center">
                <div className="mb-2 text-primary">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#4A6CFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-medium">{resumeFile.name}</p>
                <p className="text-sm text-gray-500 mt-1">PDF file selected</p>
                <Button
                  variant="link"
                  className="text-primary mt-2"
                  onClick={() => setResumeFile(null)}
                >
                  Change File
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-3">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto text-gray-400">
                    <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-medium mb-1">Drag & Drop PDF</p>
                <p className="text-sm text-gray-500 mb-3">or</p>
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary/5"
                  onClick={handleBrowseClick}
                >
                  Browse Files
                </Button>
                <input 
                  ref={fileInputRef}
                  type="file" 
                  accept=".pdf" 
                  className="hidden"
                  onChange={handleFileChange}
                />
              </>
            )}
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
          >
            Back
          </Button>
          
          <Button
            className="bg-primary hover:bg-primary-hover text-white"
            onClick={handleContinue}
            disabled={!jobUrl || !resumeFile}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadScreen;

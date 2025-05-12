
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
  const [showHighlights, setShowHighlights] = useState<boolean>(true);
  const { toast } = useToast();
  
  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your tailored resume is being downloaded",
    });
    
    // In a real implementation, this would trigger a file download
    setTimeout(() => {
      toast({
        title: "Download complete",
        description: "Resume downloaded successfully",
        variant: "success",
      });
    }, 1500);
  };
  
  const handleCopyLink = () => {
    // In a real implementation, this would copy a shareable link
    toast({
      title: "Link copied",
      description: "Share link copied to clipboard",
    });
  };
  
  const handleEmail = () => {
    // In a real implementation, this would open an email dialog
    toast({
      title: "Email option",
      description: "Email sharing would open here",
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">✓</div>
          <div className="w-16 h-1 bg-primary"></div>
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">✓</div>
          <div className="w-16 h-1 bg-primary"></div>
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">✓</div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-center">Your Tailored Resume</h2>
      
      <div className="mb-6 flex justify-center items-center">
        <div className="bg-gray-100 p-1 rounded-lg">
          <Button
            variant={showHighlights ? "default" : "ghost"}
            className={showHighlights ? "bg-primary" : ""}
            onClick={() => setShowHighlights(true)}
          >
            Show Changes
          </Button>
          <Button
            variant={!showHighlights ? "default" : "ghost"}
            className={!showHighlights ? "bg-primary" : ""}
            onClick={() => setShowHighlights(false)}
          >
            Clean View
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Original Resume Preview */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4 text-center">Original</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-4 h-96 overflow-y-auto">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold">John Doe</h4>
              <p className="text-gray-500">Software Engineer</p>
              <p className="text-sm text-gray-500">john@example.com • (123) 456-7890</p>
            </div>
            
            <div className="mb-4">
              <h5 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Summary</h5>
              <p className="text-sm">
                Software engineer with 5 years of experience developing web applications.
                Skilled in React, Node.js, and SQL. Looking for opportunities to grow.
              </p>
            </div>
            
            <div className="mb-4">
              <h5 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Experience</h5>
              
              <div className="mb-3">
                <h6 className="font-semibold">Senior Developer at Tech Company</h6>
                <p className="text-xs text-gray-500">Jan 2020 - Present</p>
                <ul className="text-sm list-disc pl-5 mt-1">
                  <li>Built web applications using React</li>
                  <li>Managed team of junior developers</li>
                  <li>Implemented CI/CD pipeline</li>
                </ul>
              </div>
              
              <div className="mb-3">
                <h6 className="font-semibold">Developer at Startup Inc.</h6>
                <p className="text-xs text-gray-500">Jun 2017 - Dec 2019</p>
                <ul className="text-sm list-disc pl-5 mt-1">
                  <li>Developed frontend features using Angular</li>
                  <li>Worked on database optimizations</li>
                  <li>Implemented user authentication system</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Skills</h5>
              <p className="text-sm">
                JavaScript, React, Angular, Node.js, Express, SQL, Git
              </p>
            </div>
          </div>
        </div>
        
        {/* Optimized Resume Preview */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4 text-center">Optimized</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-4 h-96 overflow-y-auto">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold">John Doe</h4>
              <p className="text-gray-500">Frontend Software Engineer</p>
              <p className="text-sm text-gray-500">john@example.com • (123) 456-7890</p>
            </div>
            
            <div className="mb-4">
              <h5 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Summary</h5>
              <p className="text-sm">
                {showHighlights ? (
                  <>
                    <span>Software engineer with 5 years of experience developing </span>
                    <span className="bg-yellow-100">modern web applications</span>
                    <span>. Skilled in </span>
                    <span className="bg-yellow-100">React, Redux, TypeScript,</span>
                    <span> Node.js, and SQL. Looking for opportunities to </span>
                    <span className="bg-yellow-100">create high-performance, scalable frontend architectures.</span>
                  </>
                ) : (
                  "Software engineer with 5 years of experience developing modern web applications. Skilled in React, Redux, TypeScript, Node.js, and SQL. Looking for opportunities to create high-performance, scalable frontend architectures."
                )}
              </p>
            </div>
            
            <div className="mb-4">
              <h5 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Experience</h5>
              
              <div className="mb-3">
                <h6 className="font-semibold">
                  {showHighlights ? (
                    <>
                      <span>Senior </span>
                      <span className="bg-yellow-100">Frontend </span>
                      <span>Developer at Tech Company</span>
                    </>
                  ) : (
                    "Senior Frontend Developer at Tech Company"
                  )}
                </h6>
                <p className="text-xs text-gray-500">Jan 2020 - Present</p>
                <ul className="text-sm list-disc pl-5 mt-1">
                  {showHighlights ? (
                    <>
                      <li>
                        <span>Built </span>
                        <span className="bg-yellow-100">responsive and accessible </span>
                        <span>web applications using React</span>
                        <span className="bg-yellow-100">, Redux, and TypeScript</span>
                      </li>
                      <li>
                        <span>Managed team of junior developers </span>
                        <span className="bg-yellow-100">implementing component library and design system</span>
                      </li>
                      <li>
                        <span>Implemented CI/CD pipeline </span>
                        <span className="bg-yellow-100">reducing deployment time by 40%</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>Built responsive and accessible web applications using React, Redux, and TypeScript</li>
                      <li>Managed team of junior developers implementing component library and design system</li>
                      <li>Implemented CI/CD pipeline reducing deployment time by 40%</li>
                    </>
                  )}
                </ul>
              </div>
              
              <div className="mb-3">
                <h6 className="font-semibold">
                  {showHighlights ? (
                    <>
                      <span className="bg-yellow-100">Frontend </span>
                      <span>Developer at Startup Inc.</span>
                    </>
                  ) : (
                    "Frontend Developer at Startup Inc."
                  )}
                </h6>
                <p className="text-xs text-gray-500">Jun 2017 - Dec 2019</p>
                <ul className="text-sm list-disc pl-5 mt-1">
                  {showHighlights ? (
                    <>
                      <li>Developed frontend features using Angular</li>
                      <li>
                        <span>Worked on </span>
                        <span className="bg-yellow-100">performance optimizations </span>
                        <span>database </span>
                        <span className="bg-yellow-100">and frontend rendering</span>
                      </li>
                      <li>
                        <span>Implemented user authentication system </span>
                        <span className="bg-yellow-100">and role-based access control</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>Developed frontend features using Angular</li>
                      <li>Worked on performance optimizations for database and frontend rendering</li>
                      <li>Implemented user authentication system and role-based access control</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Skills</h5>
              <p className="text-sm">
                {showHighlights ? (
                  <>
                    <span>JavaScript, </span>
                    <span className="bg-yellow-100">TypeScript, </span>
                    <span>React, </span>
                    <span className="bg-yellow-100">Redux, </span>
                    <span>Angular, Node.js, Express, SQL, Git</span>
                    <span className="bg-yellow-100">, Webpack, Jest, Cypress</span>
                  </>
                ) : (
                  "JavaScript, TypeScript, React, Redux, Angular, Node.js, Express, SQL, Git, Webpack, Jest, Cypress"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* ATS Compatibility Score */}
      <div className="max-w-3xl mx-auto mb-8">
        <h3 className="text-lg font-semibold mb-4">ATS Compatibility Score</h3>
        <div className="flex space-x-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4 w-1/2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Before</span>
              <span className="text-sm font-medium">{originalScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-500 h-2 rounded-full" style={{ width: `${originalScore}%` }}></div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4 w-1/2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">After</span>
              <span className="text-sm font-medium text-success">{optimizedScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-success h-2 rounded-full" style={{ width: `${optimizedScore}%` }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          onClick={onCreateAnother}
          variant="outline"
          className="border-primary text-primary hover:bg-primary/5"
        >
          Create Another
        </Button>
        
        <Button
          onClick={handleEmail}
          variant="outline"
        >
          Email
        </Button>
        
        <Button
          onClick={handleCopyLink}
          variant="outline"
        >
          Copy Link
        </Button>
        
        <Button
          onClick={handleDownload}
          className="bg-primary hover:bg-primary-hover text-white"
        >
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default PreviewScreen;

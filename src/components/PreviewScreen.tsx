
// This is just a basic mock-up, you would need to implement a real preview component
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeftIcon, Download } from "lucide-react";

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
  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="outline" 
        onClick={onCreateAnother} 
        className="mb-8 gap-2"
      >
        <ArrowLeftIcon className="h-4 w-4" /> Create Another
      </Button>
      
      <h1 className="text-3xl font-bold mb-8 text-center">Your Optimized Resume</h1>
      
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <Tabs defaultValue="optimized">
            <TabsList className="w-full grid grid-cols-2 mb-6">
              <TabsTrigger value="original">Original</TabsTrigger>
              <TabsTrigger value="optimized">Optimized</TabsTrigger>
            </TabsList>
            
            <TabsContent value="original">
              <Card className="min-h-[600px]">
                <CardHeader>
                  <CardTitle className="text-xl">Original Resume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border border-gray-200 rounded-lg p-6 min-h-[500px] bg-white">
                    <h2 className="text-xl font-bold">John Doe</h2>
                    <p className="text-gray-500 mb-4">Software Engineer</p>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Experience</h3>
                      <hr className="my-2" />
                      <p className="font-medium">Senior Developer at Tech Solutions</p>
                      <p className="text-sm text-gray-500">Jan 2020 - Present</p>
                      <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>Built web applications using JavaScript and CSS</li>
                        <li>Worked on database optimization</li>
                        <li>Managed junior developers on the team</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold">Skills</h3>
                      <hr className="my-2" />
                      <p>JavaScript, HTML, CSS, SQL, PHP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="optimized">
              <Card className="min-h-[600px]">
                <CardHeader>
                  <CardTitle className="text-xl">Optimized Resume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border border-gray-200 rounded-lg p-6 min-h-[500px] bg-white">
                    <h2 className="text-xl font-bold">John Doe</h2>
                    <p className="text-gray-500 mb-4">Frontend Software Engineer</p>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Experience</h3>
                      <hr className="my-2" />
                      <p className="font-medium">Senior Frontend Developer at Tech Solutions</p>
                      <p className="text-sm text-gray-500">Jan 2020 - Present</p>
                      <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>Built <span className="bg-green-100 text-green-700 font-medium">responsive web applications</span> using <span className="bg-green-100 text-green-700 font-medium">React, TypeScript</span> and CSS</li>
                        <li>Implemented <span className="bg-green-100 text-green-700 font-medium">performance optimization</span> techniques for database queries</li>
                        <li>Led a team of 5 junior developers, improving team productivity by 30%</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold">Skills</h3>
                      <hr className="my-2" />
                      <p><span className="bg-green-100 text-green-700 font-medium">React</span>, <span className="bg-green-100 text-green-700 font-medium">TypeScript</span>, JavaScript, HTML, CSS, SQL, PHP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">ATS Compatibility Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Original</span>
                    <span>{originalScore}%</span>
                  </div>
                  <Progress value={originalScore} className="h-2 bg-gray-200" indicatorClassName="bg-amber-500" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Optimized</span>
                    <span>{optimizedScore}%</span>
                  </div>
                  <Progress value={optimizedScore} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />
                </div>
                
                <div className="pt-4 text-center">
                  <p className="text-sm text-gray-500 mb-6">
                    Your resume has been optimized to be {optimizedScore - originalScore}% more ATS-friendly.
                  </p>
                  
                  <Button variant="default" className="w-full">
                    <Download className="h-4 w-4 mr-2" /> Download Optimized Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PreviewScreen;


import React from 'react';
import { Button } from "@/components/ui/button";

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F6] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                Tailor your resume to any job in <span className="text-primary">seconds</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Increase your interview chances with AI-powered resume optimization that matches your skills to job requirements perfectly.
              </p>
              <Button 
                onClick={onGetStarted}
                className="bg-primary hover:bg-primary-hover text-white text-lg py-6 px-8"
              >
                Get Started
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-accent rounded-xl"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Resume Tailoring Illustration" 
                  className="w-full max-w-md rounded-xl shadow-lg relative z-10 bg-white p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="card flex flex-col items-center text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#4A6CFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload Your Resume</h3>
              <p className="text-gray-600">Upload your existing resume and paste the job URL you're applying to.</p>
            </div>
            
            {/* Step 2 */}
            <div className="card flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Optimization</h3>
              <p className="text-gray-600">Our AI analyzes the job description and optimizes your resume for ATS systems.</p>
            </div>
            
            {/* Step 3 */}
            <div className="card flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#2E3A59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Download & Apply</h3>
              <p className="text-gray-600">Download your tailored resume and apply with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="font-semibold text-secondary">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600">"I landed 3 interviews in a week after using HireKit to tailor my resume. The difference was remarkable!"</p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="font-semibold text-secondary">AS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Alice Smith</h4>
                  <p className="text-sm text-gray-500">Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-600">"The AI suggestions were spot on. I was amazed at how it highlighted my relevant experience for each job application."</p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="font-semibold text-secondary">RJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <p className="text-sm text-gray-500">Data Analyst</p>
                </div>
              </div>
              <p className="text-gray-600">"The ATS optimization feature made all the difference. I went from getting zero callbacks to multiple interviews."</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold mb-2">How does HireKit optimize my resume?</h4>
              <p className="text-gray-600">HireKit analyzes the job description to identify key skills and requirements, then suggests modifications to your resume to highlight relevant experience and use industry-specific keywords that ATS systems look for.</p>
            </div>
            
            <div className="card hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold mb-2">Is my data secure?</h4>
              <p className="text-gray-600">Yes, we take privacy seriously. Your resume data is encrypted and never shared with third parties. We only use it to provide you with customized optimization suggestions.</p>
            </div>
            
            <div className="card hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold mb-2">How much does HireKit cost?</h4>
              <p className="text-gray-600">HireKit offers a free tier that allows you to optimize one resume per day. For unlimited optimizations and advanced features, our premium plans start at just $9.99 per month.</p>
            </div>
            
            <div className="card hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold mb-2">Can I use HireKit for any industry?</h4>
              <p className="text-gray-600">Absolutely! HireKit is trained on job descriptions from hundreds of industries and can optimize resumes for virtually any role or sector.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to land your dream job?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of job seekers who have improved their chances with HireKit's resume tailoring tool.</p>
          <Button 
            onClick={onGetStarted}
            className="bg-white text-primary hover:bg-gray-100 text-lg py-6 px-8"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
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
                <li>Features</li>
                <li>Pricing</li>
                <li>Use Cases</li>
                <li>Integrations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Blog</li>
                <li>Help Center</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-6 text-sm text-gray-300 text-center">
            &copy; {new Date().getFullYear()} HireKit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

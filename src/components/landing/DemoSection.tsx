
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

// Job description data with matching resume content
const jobDescriptions = [
  {
    id: "software-engineer",
    title: "Frontend Developer",
    requirements: [
      "React expertise", 
      "TypeScript knowledge", 
      "Responsive design", 
      "Performance optimization"
    ],
    resumeItems: [
      "Led front-end development using <span class=\"bg-green-100 text-green-700 px-1 rounded\">React.js</span> for the company website",
      "Built responsive user interfaces with <span class=\"bg-green-100 text-green-700 px-1 rounded\">TypeScript</span> and modern JavaScript",
      "Implemented <span class=\"bg-green-100 text-green-700 px-1 rounded\">responsive design</span> techniques for all projects",
      "Applied <span class=\"bg-green-100 text-green-700 px-1 rounded\">performance optimization</span> strategies, reducing loading times by 40%"
    ],
    atsScore: 92
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    requirements: [
      "Python programming", 
      "Machine learning", 
      "Data visualization", 
      "Statistical analysis"
    ],
    resumeItems: [
      "Developed data pipelines using <span class=\"bg-green-100 text-green-700 px-1 rounded\">Python</span> for automated reporting",
      "Built and deployed <span class=\"bg-green-100 text-green-700 px-1 rounded\">machine learning</span> models for predictive analytics",
      "Created interactive <span class=\"bg-green-100 text-green-700 px-1 rounded\">data visualizations</span> to communicate findings to stakeholders",
      "Conducted <span class=\"bg-green-100 text-green-700 px-1 rounded\">statistical analysis</span> to identify trends and business opportunities"
    ],
    atsScore: 88
  },
  {
    id: "product-manager",
    title: "Product Manager",
    requirements: [
      "User research", 
      "Agile methodologies", 
      "Product roadmapping", 
      "Stakeholder management"
    ],
    resumeItems: [
      "Conducted extensive <span class=\"bg-green-100 text-green-700 px-1 rounded\">user research</span> to identify customer pain points and needs",
      "Led product development using <span class=\"bg-green-100 text-green-700 px-1 rounded\">Agile methodologies</span>, improving delivery times by 30%",
      "Created and maintained <span class=\"bg-green-100 text-green-700 px-1 rounded\">product roadmaps</span> aligned with business objectives",
      "Managed relationships with key <span class=\"bg-green-100 text-green-700 px-1 rounded\">stakeholders</span> across engineering, design, and business teams"
    ],
    atsScore: 94
  }
];

// Original resume items before optimization
const originalResumeItems = [
  "Led front-end development for the company website",
  "Built user interfaces with modern JavaScript",
  "Ensured mobile friendliness of all projects",
  "Improved loading speed of the company's main platform"
];

const DemoSection = () => {
  const [selectedJob, setSelectedJob] = useState(jobDescriptions[0]);
  const [showOriginalResume, setShowOriginalResume] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);
  const [showATSScore, setShowATSScore] = useState(false);

  // Animation to reveal ATS score on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setShowATSScore(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (demoRef.current) {
      observer.observe(demoRef.current);
    }
    
    return () => {
      if (demoRef.current) observer.unobserve(demoRef.current);
    };
  }, [demoRef]);

  return (
    <section ref={demoRef} className="py-16 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          See How HireKit Transforms Your Resume
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          One Resume, Tailored for Multiple Jobs
        </motion.p>
        
        <div className="mb-8">
          <Tabs 
            defaultValue="software-engineer" 
            className="w-full"
            onValueChange={(value) => {
              const selected = jobDescriptions.find(job => job.id === value);
              if (selected) setSelectedJob(selected);
              setShowOriginalResume(false);
            }}
          >
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2">
              {jobDescriptions.map((job) => (
                <TabsTrigger 
                  key={job.id} 
                  value={job.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {job.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Job Description Panel */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            key={`jd-${selectedJob.id}`}
            animate={{ opacity: 1 }}
          >
            <h3 className="font-semibold text-xl mb-4">Job Description: {selectedJob.title}</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold mb-3">Requirements:</h5>
              <ul className="space-y-3 mb-4">
                {selectedJob.requirements.map((req, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span className="bg-primary/10 text-primary-hover px-2 py-1 rounded">
                      {req}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Resume Panel */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            key={`resume-${selectedJob.id}-${showOriginalResume}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-xl">Resume Preview</h3>
              <button
                onClick={() => setShowOriginalResume(!showOriginalResume)}
                className="text-sm px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {showOriginalResume ? "Show Optimized" : "Show Original"}
              </button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h4 className="font-bold mb-2">Alex Johnson</h4>
              <p className="text-gray-600 text-sm mb-4">Frontend Developer | alex@example.com | (555) 123-4567</p>
              
              <h5 className="font-semibold text-sm uppercase text-gray-700 border-b pb-1 mb-2">Experience</h5>
              <div className="mb-4">
                <div className="font-medium">Senior Web Developer, TechCorp</div>
                <div className="text-sm text-gray-600 mb-1">Jan 2020 - Present</div>
                <ul className="text-sm space-y-2">
                  {showOriginalResume ? (
                    originalResumeItems.map((item, i) => (
                      <motion.li key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))
                  ) : (
                    selectedJob.resumeItems.map((item, i) => (
                      <motion.li key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* ATS Score Meter */}
        <motion.div 
          className="mt-12 max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          key={`ats-${selectedJob.id}-${showOriginalResume}`}
        >
          <h3 className="text-lg font-semibold mb-4 text-center">ATS Compatibility Score</h3>
          
          {showOriginalResume ? (
            <div className="flex items-center mb-2">
              <span className="text-gray-600 w-20">Original:</span>
              <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden mr-2">
                <motion.div 
                  className="h-full bg-red-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: showATSScore ? "45%" : "0%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                ></motion.div>
              </div>
              <motion.span 
                className="font-semibold w-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: showATSScore ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                45%
              </motion.span>
            </div>
          ) : (
            <div className="flex items-center mb-2">
              <span className="text-gray-600 w-20">Optimized:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden mr-2">
                <motion.div 
                  className="bg-green-500 h-full rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: showATSScore ? `${selectedJob.atsScore}%` : "0%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                ></motion.div>
              </div>
              <motion.div 
                className="font-semibold w-16 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: showATSScore ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                {selectedJob.atsScore}% <Star className="h-4 w-4 text-yellow-400 ml-1" />
              </motion.div>
            </div>
          )}
          
          <p className="mt-4 text-sm text-gray-500 text-center">
            ATS (Applicant Tracking System) scores measure how well your resume matches the job requirements.
            Higher scores significantly increase your chances of getting past automated screening systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;

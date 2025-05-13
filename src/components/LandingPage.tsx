
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, FileText, Award, LayoutGrid, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface LandingPageProps {
  onGetStarted: () => void;
}

// Feature data
const features = [
  {
    id: 1,
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "Job-Specific Optimization",
    description: "Our AI tailors your resume for each specific job description, highlighting relevant skills and experience.",
    details: "The AI analyzes the job description to extract key requirements and matches them with your experience, adjusting language and emphasis to create the perfect fit."
  },
  {
    id: 2,
    icon: <Award className="h-6 w-6 text-accent" />,
    title: "ATS Score Improvement",
    description: "Boost your ATS compatibility score by up to 85% to ensure your resume gets past automated screening systems.",
    details: "Our algorithms are trained on thousands of ATS systems to ensure your resume contains the right keywords, formatting, and structure to score highly."
  },
  {
    id: 3,
    icon: <LayoutGrid className="h-6 w-6 text-secondary" />,
    title: "Format Preservation",
    description: "Maintain your resume's original formatting and structure while optimizing the content.",
    details: "Unlike other tools that destroy your formatting, we preserve your design choices while making smart content adjustments that improve ATS compatibility."
  }
];

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    image: "/placeholder.svg",
    text: "I landed 3 interviews in a week after using HireKit to tailor my resume. The difference was remarkable!"
  },
  {
    id: 2,
    name: "Alice Smith",
    role: "Marketing Manager",
    image: "/placeholder.svg",
    text: "The AI suggestions were spot on. I was amazed at how it highlighted my relevant experience for each job application."
  },
  {
    id: 3,
    name: "Robert Johnson",
    role: "Data Analyst",
    image: "/placeholder.svg",
    text: "The ATS optimization feature made all the difference. I went from getting zero callbacks to multiple interviews."
  }
];

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

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const [expandedFeatures, setExpandedFeatures] = useState<number[]>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedJob, setSelectedJob] = useState(jobDescriptions[0]);
  const [showOriginalResume, setShowOriginalResume] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);
  const [showATSScore, setShowATSScore] = useState(false);

  // Toggle feature expansion
  const toggleFeature = (id: number) => {
    setExpandedFeatures(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to demo section
  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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
                  onClick={scrollToDemo}
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

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.id}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="mt-auto">
                    <button 
                      onClick={() => toggleFeature(feature.id)}
                      className="text-primary font-medium flex items-center hover:underline"
                    >
                      {expandedFeatures.includes(feature.id) ? 'Show Less' : 'Learn More'}
                      <ChevronDown 
                        className={`ml-1 transform transition-transform ${expandedFeatures.includes(feature.id) ? 'rotate-180' : ''}`} 
                        size={16}
                      />
                    </button>
                    
                    {expandedFeatures.includes(feature.id) && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-gray-600 bg-gray-100 p-4 rounded-lg"
                      >
                        {feature.details}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
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
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowOriginalResume(!showOriginalResume)}
                  className="text-sm"
                >
                  {showOriginalResume ? "Show Optimized" : "Show Original"}
                </Button>
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

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-4">What Users Say</h2>
            <p className="text-center text-gray-600 mb-12 max-w-lg mx-auto">Join thousands of job seekers who have improved their interview chances with HireKit.</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white shadow-sm p-8 rounded-xl text-center relative"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeTestimonial === index ? 1 : 0,
                    scale: activeTestimonial === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ display: activeTestimonial === index ? 'block' : 'none' }}
                >
                  <div className="mx-auto bg-gray-200 rounded-full w-16 h-16 mb-4 overflow-hidden border-2 border-primary">
                    <AspectRatio ratio={1/1}>
                      <img src={testimonial.image} alt={testimonial.name} className="object-cover w-full h-full" />
                    </AspectRatio>
                  </div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
              
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-primary' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-3 gap-4">
              <motion.div 
                className="col-span-1 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.h3 
                  className="text-3xl font-bold text-primary mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                >
                  3x
                </motion.h3>
                <p className="text-gray-600">Higher interview rate</p>
              </motion.div>
              
              <motion.div 
                className="col-span-1 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.h3 
                  className="text-3xl font-bold text-accent mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                >
                  85%
                </motion.h3>
                <p className="text-gray-600">Average ATS score improvement</p>
              </motion.div>
              
              <motion.div 
                className="col-span-1 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h3 
                  className="text-3xl font-bold text-secondary mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                >
                  15,000+
                </motion.h3>
                <p className="text-gray-600">Successful placements</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Optimize Your Resume?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Upload your resume now and see the difference AI optimization can make.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              onClick={onGetStarted}
              className="bg-white text-primary hover:bg-gray-100 text-lg py-6 px-8 shadow-lg"
            >
              Start Optimizing Today <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
          <p className="mt-4 text-white/80">Join 15,000+ successful applicants • Free to start • No credit card required</p>
        </motion.div>
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
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Pricing</li>
                <li className="hover:text-white cursor-pointer">Use Cases</li>
                <li className="hover:text-white cursor-pointer">Integrations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
                <li className="hover:text-white cursor-pointer">Cookie Policy</li>
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

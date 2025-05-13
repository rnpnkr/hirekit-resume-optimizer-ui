
import React, { useState } from 'react';
import { ChevronDown, FileText, Award, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

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

const FeaturesSection = () => {
  const [expandedFeatures, setExpandedFeatures] = useState<number[]>([]);

  // Toggle feature expansion
  const toggleFeature = (id: number) => {
    setExpandedFeatures(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
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
  );
};

export default FeaturesSection;

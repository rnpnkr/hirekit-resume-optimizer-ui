import React, { useRef } from 'react';
import { FileText, Award, LayoutGrid } from "lucide-react";
import { motion, useInView } from "framer-motion";

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
    icon: <Award className="h-6 w-6 text-success" />,
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

const FeatureCard = ({ feature, index, maxCardHeight }: { feature: typeof features[0], index: number, maxCardHeight: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col h-full min-h-[420px]"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ maxHeight: maxCardHeight ? maxCardHeight : undefined, overflow: 'hidden' }}
    >
      <div className="flex flex-col h-full">
        <motion.div
          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        >
          {feature.icon}
        </motion.div>

        <motion.h3
          className="text-xl font-semibold mb-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
        >
          {feature.title}
        </motion.h3>

        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
        >
          {feature.description}
        </motion.p>

        <motion.div
          className="mt-auto text-gray-600 bg-gray-100 p-4 rounded-lg"
          initial={{ opacity: 0, maxHeight: 0 }}
          animate={isInView ? { opacity: 1, maxHeight: 120 } : {}}
          transition={{ duration: 0.7, delay: index * 0.15 + 0.6 }}
          style={{ overflow: 'hidden' }}
        >
          {feature.details}
        </motion.div>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  // Set a fixed maxCardHeight for all cards for consistency
  const maxCardHeight = 420;
  return (
    <section className="py-16 bg-white" id="features">
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
            <FeatureCard key={feature.id} feature={feature} index={index} maxCardHeight={maxCardHeight} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

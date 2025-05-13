
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CtaSectionProps {
  onGetStarted: () => void;
}

const CtaSection = ({ onGetStarted }: CtaSectionProps) => {
  return (
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
  );
};

export default CtaSection;

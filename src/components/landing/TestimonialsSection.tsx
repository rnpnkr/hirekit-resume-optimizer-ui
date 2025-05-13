
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
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
  );
};

export default TestimonialsSection;

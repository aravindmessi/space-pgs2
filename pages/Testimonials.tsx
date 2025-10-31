
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'John Doe', company: 'TechCorp', quote: 'PGS transformed our online presence. Their attention to detail and creative vision are unparalleled.', avatar: '1' },
  { name: 'Jane Smith', company: 'Innovate LLC', quote: 'The team is incredibly talented and professional. They delivered beyond our expectations and on schedule.', avatar: '2' },
  { name: 'Sam Wilson', company: 'MarketPro', quote: 'Working with them was a breeze. They understood our needs perfectly and created a stunning website that our users love.', avatar: '3' },
  { name: 'Emily White', company: 'Future Ventures', quote: "An absolute game-changer for our brand. The AI integration they developed has streamlined our entire workflow.", avatar: '4' },
];

const Testimonials: React.FC = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    
    return (
        <AnimatedPage>
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Words From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Clients</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            We pride ourselves on building strong relationships and delivering exceptional results. Here's what our partners have to say.
                        </p>
                    </div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div 
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 backdrop-blur-sm"
                            >
                                <p className="text-gray-300 italic text-lg mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img 
                                        src={`https://i.pravatar.cc/64?u=${testimonial.avatar}`} 
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full mr-4 border-2 border-purple-500"
                                    />
                                    <div>
                                        <h4 className="font-bold text-white text-xl">{testimonial.name}</h4>
                                        <p className="text-gray-400">{testimonial.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Testimonials;

import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { services } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
    };
    
    return (
        <AnimatedPage>
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Offer</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            A comprehensive suite of digital services designed to build, grow, and elevate your brand's presence.
                        </p>
                    </div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {services.map((service) => (
                            <motion.div key={service.id} variants={itemVariants}>
                                <Link to={`/services/${service.id}`} className="block h-full">
                                    <div className="h-full bg-gray-900/50 p-8 rounded-xl border border-gray-800 backdrop-blur-sm hover:border-purple-500/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20 group">
                                        <div className="text-purple-400 mb-4 transition-colors group-hover:text-purple-300">
                                            <service.icon className="h-12 w-12" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">{service.name}</h3>
                                        <p className="text-gray-400 mb-4">{service.description}</p>
                                        <span className="font-semibold text-purple-400 transition-all group-hover:text-white group-hover:pl-2">
                                            Learn More &rarr;
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Services;

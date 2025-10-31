
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { services } from '../constants';

const Home: React.FC = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <AnimatedPage>
            <div className="min-h-screen flex items-center justify-center pt-24 pb-12">
                <div className="container mx-auto px-6 text-center">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4"
                        >
                            We Weave
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                                Digital Dreams
                            </span>
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
                        >
                            PGS is a digital agency where innovation meets artistry. We craft bespoke digital solutions that resonate with your audience and elevate your brand.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <Link
                                to="/discuss-project"
                                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
                            >
                                Start Your Journey
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {services.slice(0, 3).map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="text-purple-400 mb-4">
                                    <service.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                     <div className="text-center mt-12">
                        <Link to="/services" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                            Explore all services &rarr;
                        </Link>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Home;
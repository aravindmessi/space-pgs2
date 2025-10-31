
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <AnimatedPage>
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">PGS</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            We are a collective of creators, strategists, and innovators dedicated to pushing the boundaries of digital expression.
                        </p>
                    </motion.div>
                    
                    <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <img src="https://picsum.photos/800/600?grayscale" alt="Our Team" className="rounded-lg shadow-2xl" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-400 mb-6">
                                To empower brands with transformative digital solutions that are not only visually stunning but also strategically effective. We believe in the power of great design and technology to tell compelling stories and build lasting connections.
                            </p>
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-400">
                                To be a leading force in the digital creative space, known for our unwavering commitment to quality, creativity, and client success. We aim to create a future where every digital interaction is a memorable experience.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default About;
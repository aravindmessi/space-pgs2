
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <AnimatedPage>
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Touch</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Have a question or a project in mind? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 bg-gray-900/50 p-8 sm:p-12 rounded-xl border border-gray-800 backdrop-blur-sm">
                        <motion.div
                           initial={{ opacity: 0, x: -30 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.7 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
                            <p className="text-gray-400 mb-6">Fill up the form and our Team will get back to you within 24 hours.</p>
                            <div className="space-y-4 text-gray-300">
                                <p><strong>Email:</strong> hello@pgs.dev</p>
                                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                                <p><strong>Address:</strong> 123 Creative Lane, Innovation City, 10101</p>
                            </div>
                        </motion.div>
                        <motion.form 
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                                <input type="text" id="name" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                                <input type="email" id="email" className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                <textarea id="message" rows={4} className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"></textarea>
                            </div>
                             <div>
                                <button type="submit" className="w-full px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
                                    Send Message
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Contact;
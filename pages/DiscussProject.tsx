
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const DiscussProject: React.FC = () => {
    const inputStyle = "mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition";
    
    return (
        <AnimatedPage>
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Amazing</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Provide us with a few details about your project, and we'll get back to you with a plan.
                        </p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto bg-gray-900/50 p-8 sm:p-12 rounded-2xl border border-gray-800 backdrop-blur-sm"
                    >
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name *</label>
                                <input type="text" id="name" required className={inputStyle} />
                            </div>
                             <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company Name</label>
                                <input type="text" id="company" className={inputStyle} />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email *</label>
                                <input type="email" id="email" required className={inputStyle} />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                                <input type="tel" id="phone" className={inputStyle} />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-300">Services Interested In *</label>
                                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {['Web Dev', 'App Dev', 'Video & Ads', 'ERP', 'CRM', 'AI'].map(service => (
                                        <div key={service} className="flex items-center">
                                            <input id={service} name="service" type="checkbox" className="h-4 w-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500" />
                                            <label htmlFor={service} className="ml-2 block text-sm text-gray-300">{service}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-300">Estimated Budget</label>
                                <select id="budget" className={inputStyle}>
                                    <option>Select a range</option>
                                    <option>$5,000 - $10,000</option>
                                    <option>$10,000 - $25,000</option>
                                    <option>$25,000 - $50,000</option>
                                    <option>$50,000+</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="details" className="block text-sm font-medium text-gray-300">Project Details *</label>
                                <textarea id="details" rows={6} required className={inputStyle}></textarea>
                            </div>
                             <div className="md:col-span-2 text-center">
                                <button type="submit" className="inline-block w-full md:w-auto px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
                                    Submit Project
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default DiscussProject;

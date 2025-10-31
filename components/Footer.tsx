
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './Icons';

const Footer: React.FC = () => {
    const socialLinks = ['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'];

    return (
        <footer className="relative z-10 border-t border-gray-800/50 bg-[#0A0A10]">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <LogoIcon className="h-10 w-10" />
                            <span className="text-xl font-bold text-white">PGS</span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Crafting digital experiences that inspire and innovate.
                        </p>
                    </div>
                    
                    <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold text-white mb-4">Explore</h3>
                            <ul className="space-y-2">
                                <li><Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About</Link></li>
                                <li><Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</Link></li>
                                <li><Link to="/testimonials" className="text-gray-400 hover:text-purple-400 transition-colors">Testimonials</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">Connect</h3>
                            <ul className="space-y-2">
                                {socialLinks.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-semibold text-white mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">Start a project</h3>
                             <Link to="/discuss-project" className="text-purple-400 hover:text-purple-300 transition-colors">
                                Let's talk &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} PGS. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
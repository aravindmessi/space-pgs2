import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { navLinksLeft, navLinksRight, discussProjectLink, services } from '../constants';
import { LogoIcon } from './Icons';

const NavItem: React.FC<{ to: string; children: React.ReactNode; }> = ({ to, children }) => (
    <NavLink to={to} className={({ isActive }) => 
        `relative px-3 py-2 text-sm font-medium transition-colors duration-300
        ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
    }>
        {({ isActive }) => (
            <>
                {children}
                {isActive && (
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500"
                        layoutId="underline"
                    />
                )}
            </>
        )}
    </NavLink>
);

const ServicesDropdown: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 origin-top-right rounded-md bg-black bg-opacity-70 backdrop-blur-sm shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none"
    >
        <div className="py-1">
            {services.map((service) => (
                <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                    {service.name}
                </Link>
            ))}
        </div>
    </motion.div>
);

const DesktopNav: React.FC = () => {
    const [isServicesOpen, setServicesOpen] = useState(false);

    return (
        <nav className="hidden lg:flex items-center justify-center w-full">
            <div className="flex items-center justify-end space-x-4 flex-1">
                {navLinksLeft.map((link) => (
                    link.dropdown ? (
                        <div key={link.name} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                            <NavItem to={link.path}>{link.name}</NavItem>
                            <AnimatePresence>{isServicesOpen && <ServicesDropdown />}</AnimatePresence>
                        </div>
                    ) : (
                        <NavItem key={link.name} to={link.path}>{link.name}</NavItem>
                    )
                ))}
            </div>
            
            <Link to="/" className="mx-8">
                <LogoIcon className="h-14 w-14 hover:opacity-80 transition-opacity" />
            </Link>

            <div className="flex items-center justify-start space-x-4 flex-1">
                {navLinksRight.map((link) => (
                    <NavItem key={link.name} to={link.path}>{link.name}</NavItem>
                ))}
                <Link to={discussProjectLink.path} className="ml-4 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
                    {discussProjectLink.name}
                </Link>
            </div>
        </nav>
    );
};

const MobileNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);
    
    const toggleMenu = () => setIsOpen(!isOpen);

    const mobileMenuVariants = {
        closed: { opacity: 0, x: '100%' },
        open: { opacity: 1, x: '0%', transition: { type: 'spring', stiffness: 260, damping: 30 } },
    };

    const navItemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }

    return (
        <>
            <div className="lg:hidden flex justify-end items-center w-full relative">
                <Link to="/" className="absolute left-1/2 -translate-x-1/2">
                    <LogoIcon className="h-10 w-10" />
                </Link>
                <button onClick={toggleMenu} className="z-50 p-2">
                    <motion.div animate={isOpen ? "open" : "closed"} className="w-6 h-6 flex flex-col justify-around">
                        <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 5.5 } }} className="w-full h-0.5 bg-white rounded-full"></motion.span>
                        <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className="w-full h-0.5 bg-white rounded-full"></motion.span>
                        <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -5.5 } }} className="w-full h-0.5 bg-white rounded-full"></motion.span>
                    </motion.div>
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 z-40 bg-[#0A0A10] bg-opacity-95 backdrop-blur-lg p-8"
                    >
                        <motion.div 
                          className="flex flex-col items-center justify-center h-full space-y-6 text-2xl"
                          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                            {[...navLinksLeft, ...navLinksRight].map((link) => 
                              link.dropdown ? (
                                <motion.div key={link.name} variants={navItemVariants} className="text-center">
                                  <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-gray-300 hover:text-white">
                                    {link.name}
                                  </button>
                                  <AnimatePresence>
                                    {servicesOpen && (
                                      <motion.div 
                                        initial={{ height: 0, opacity: 0 }} 
                                        animate={{ height: 'auto', opacity: 1 }} 
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="flex flex-col items-center mt-2 space-y-2">
                                          {link.dropdown.map(service => (
                                            <Link key={service.id} to={`/services/${service.id}`} className="text-lg text-gray-400 hover:text-purple-400">
                                              {service.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              ) : (
                                <motion.div key={link.name} variants={navItemVariants}>
                                  <Link to={link.path} className="text-gray-300 hover:text-white">{link.name}</Link>
                                </motion.div>
                              )
                            )}
                            <motion.div variants={navItemVariants} className="pt-8">
                                <Link to={discussProjectLink.path} className="px-8 py-3 text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
                                    {discussProjectLink.name}
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black/50 backdrop-blur-md' : 'py-6'}`}>
            <div className="container mx-auto px-6">
                <DesktopNav />
                <MobileNav />
            </div>
        </header>
    );
};

export default Header;
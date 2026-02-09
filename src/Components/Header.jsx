import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// import { FaShoppingCart } from "react-icons/fa";

import logo from "../assets/logo.png"


import {
    Home,
    BookOpen,
    Users,
    HeartHandshake,
    Briefcase,
    ShoppingBag,
    Globe,
    Sun,
    Moon,
    Menu,
    X,
    Store,

    ChevronDown,
    StoreIcon,
    Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    // Dark mode default false rakha hai
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Dark Mode Toggle Logic
    useEffect(() => {
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [isDarkMode]);

    const navLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About Us', path: '/about', icon:   Info },
        { name: 'Products', path: '/products', icon: StoreIcon },
        { name: 'Study Portal', path: '/study', icon: BookOpen },
        { name: 'Social Network', path: '/social', icon: Users },
        { name: 'Career', path: '/career', icon: Briefcase },
        { name: 'Contact', path: '/contact', icon: ShoppingBag },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* 1. LOGO SECTION */}
                    <div className="flex-shrink-0 flex items-center gap-1 cursor-pointer">
                        <img src={logo} className='h-10' alt="" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                            Rudrix Medtech
                        </span>
                    </div>

                    {/* 2. DESKTOP NAVIGATION (Hidden on mobile) */}
                    <div className="hidden xl:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    <link.icon size={18} />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* 3. RIGHT SIDE ACTIONS */}
                    <div className="hidden md:flex items-center gap-4">

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. MOBILE MENU (Collapsible) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900"
                                >
                                    <link.icon size={20} className="text-blue-600" />
                                    {link.name}
                                </Link>
                            ))}


                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
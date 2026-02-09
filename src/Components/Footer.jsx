import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import {
  Home,
  Info,
  Store as StoreIcon,
  BookOpen,
  Users,
  Briefcase,
  ShoppingBag,
} from 'lucide-react';

import logo from "../assets/logo.png";

// 🔥 SAME NAV LINKS AS HEADER
const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About Us', path: '/about', icon: Info },
  { name: 'Products', path: '/products', icon: StoreIcon },
  { name: 'Study Portal', path: '/study', icon: BookOpen },
  { name: 'Social Network', path: '/social', icon: Users },
  { name: 'Career', path: '/career', icon: Briefcase },
  { name: 'Contact', path: '/contact', icon: ShoppingBag },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* 1. Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} className="h-10" alt="logo" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Rudrix Medtech
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Rudrix MedTech is a technology-driven healthcare solutions provider focused on creating scalable digital tools for medical institutions, students, and healthcare organizations.
              Our software ecosystem is designed to simplify learning, digital operations, and collaboration in the medical sector.            </p>
          </div>

          {/* 2. Platform (HEADER LINKS HERE) */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">
              Platform
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* 4. Contact */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <span>
                  S-157, F/f, G.K.-I Near M Block Market, <br />
                  New Delhi, 110048
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                support@rudrixmedtech.in
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Rudrix Medtech Private Limited</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

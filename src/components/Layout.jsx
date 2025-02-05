//Hassan Sharif Abbud Gonzalez / Student#: 301451853 / 2-4-2025

import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">

      <header className="h-16 bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 h-full sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">  
              <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold text-gray-900">Hassan Abbud</span>
            </Link>

            {/* Navigation */}
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
              <Link to="/project" className="text-gray-700 hover:text-blue-500">Projects</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="pt-16 flex-grow">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>

      <footer className="bg-gray-100 py-4 w-full">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Hassan Abbud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

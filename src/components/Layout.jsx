//Hassan Sharif Abbud Gonzalez / Student#: 301451853 / 2-4-2025

import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JD</span>
              </div>
              <span className="text-xl font-bold text-gray-900">John Doe</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-500">
                About
              </Link>
              <Link to="/project" className="text-gray-700 hover:text-blue-500">
                Projects
              </Link>
              <Link
                to="/education"
                className="text-gray-700 hover:text-blue-500"
              >
                Education
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main content with padding for fixed header */}
      <main className="flex-grow pt-20">
        {children} {/* Render the routes here */}
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-100 py-4 mt-auto">
        <div className="text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Hassan Abbud. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

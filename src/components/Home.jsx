//Hassan Sharif Abbud Gonzalez / Student#: 301451853 / 2-4-2025

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-600 mb-8">
            Building innovative solutions through code
          </p>
          <Link 
            to="/about" 
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Learn More About Me
          </Link>
        </div>
      </main>
    </div>
  );
};

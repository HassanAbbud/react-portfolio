//Hassan Sharif Abbud Gonzalez / Student#: 301451853 / 2-4-2025

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore my portfolio through the navigation bar above
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Software engineer | Web developer | Game developer
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
            <p className="text-gray-700">Here are some of the skills I work with:</p>
            <ul className="list-disc text-left ml-6 mt-2 text-gray-700">
              <li>JavaScript (React, Node.js)</li>
              <li>TypeScript (Angular)</li>
              <li>Game Development (Unity, C#)</li>
              <li>Web Design (HTML, CSS, MySQL)</li>
              <li>Version Control (Git, GitHub)</li>
            </ul>
          </div>

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


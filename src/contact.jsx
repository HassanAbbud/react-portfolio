//Hassan Sharif Abbud Gonzalez / Student#: 301451853 / 2-4-2025
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaItchIo, FaLinkedin, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <a
                  href="mailto:hassanabbud@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiMail className="h-6 w-6 text-blue-500 hover:text-black transition-colors" />
                </a>
                <span>hassanabbud@hotmail.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="tel:+14374557010"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPhone className="h-6 w-6 text-blue-500 hover:text-black transition-colors" />
                </a>
                <span>+1 (437) 455-7010</span>
              </div>

              <div className="flex items-center space-x-3">
              <a
                  href="https://github.com/HassanAbbud"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-6 w-6 text-blue-500 hover:text-black transition-colors" />
                </a>
                <span>Github</span>
              </div>

              <div className="flex items-center space-x-3">
              <a
                  href="https://www.linkedin.com/in/hassanabbud/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-6 w-6 text-blue-500 hover:text-black transition-colors" />
                </a>
                <span>Linkedin</span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="https://hassanabbud.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaItchIo className="h-6 w-6 text-blue-500 hover:text-black transition-colors" />
                </a>
                <span>Itch.io </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

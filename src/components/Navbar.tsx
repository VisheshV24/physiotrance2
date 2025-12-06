import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
              } else {
                scrollToSection('home');
              }
            }}
            className="flex items-center space-x-3 hover:opacity-80 transition"
          >
            <img
              src={logo}
              alt="PhysioTrance Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-gray-800">
              Physiotrance Academy
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-teal-600 transition"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('register')}
              className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition transform hover:scale-105"
            >
              Register Service
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-teal-50 rounded"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('register')}
              className="block w-full text-center px-3 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              Register Service
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

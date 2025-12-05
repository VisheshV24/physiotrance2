import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/logo.png'; 

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* <GraduationCap className="h-8 w-8 text-teal-400" /> */}
              <img
                src={logo}
                alt="PhysioTrance Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold">PhysioTrance Academy</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in research publication and academic
              excellence. Empowering researchers worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('home')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('services')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('about')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Research Publication</li>
              <li>Copyright Services</li>
              <li>Thesis Writing</li>
              <li>Topic Suggestion</li>
              <li>Plagiarism Check & Removal</li>
              <li>Patent Services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/physio_research_hub/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <a
              href="#register"
              className="inline-block px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} PhysioTrance. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

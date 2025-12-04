import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help you succeed
          </p>
        </div>

        {/* Updated grid: Now only 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition min-w-[300px]">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">aimphysioentrance2023@gmail.com</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition min-w-[300px]">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+91 9564736713</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition min-w-[300px]">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-teal-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>

          <a
            href="https://maps.app.goo.gl/pXBUNAVBWMkWmFWGA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 font-medium hover:underline"
          >
          Locate Us on Google Maps
          </a>
        </div>

        </div>
      </div>
    </section>
  );
}

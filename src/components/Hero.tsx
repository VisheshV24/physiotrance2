import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Partner in
              <span className="text-teal-600"> Academic Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Empowering researchers, scholars, and institutions with
              comprehensive publication and research support services.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">
                  Scopus & Web of Science Indexed Publications
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">
                  Expert PhD & Thesis Assistance
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">
                  Professional Research Publication Support
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition transform hover:scale-105 shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById('services')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-full font-semibold hover:bg-teal-50 transition"
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Research and Publication"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

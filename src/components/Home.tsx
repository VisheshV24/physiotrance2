import { ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={textRef}
            className={`transition-all duration-1000 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className={`inline-block transition-all duration-700 delay-100 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Your Partner in
              </span>
              <br />
              <span className={`inline-block text-teal-600 transition-all duration-700 delay-200 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                Academic Excellence
              </span>
            </h1>

            <p className={`text-xl text-gray-600 mb-6 leading-relaxed transition-all duration-700 delay-300 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Empowering researchers, scholars, and institutions with
              comprehensive publication and research support services.
            </p>

            {/* EXISTING BULLET POINTS */}
            <div className={`space-y-3 mb-8 transition-all duration-700 delay-400 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                <span className="text-gray-700 transition-colors duration-300 group-hover:text-teal-600">
                  Scopus & Web of Science Indexed Publications
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                <span className="text-gray-700 transition-colors duration-300 group-hover:text-teal-600">
                  Expert PhD & Thesis Assistance
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                <span className="text-gray-700 transition-colors duration-300 group-hover:text-teal-600">
                  National & International Government Patent, Copyright Services
                </span>
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <a
                href="#register"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg hover:shadow-teal-500/50"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById('services')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </button>
            </div>
          </div>

          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-300 ${
              imageVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Research and Publication"
                className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-teal-200 rounded-full opacity-20 blur-3xl animate-pulse-glow"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

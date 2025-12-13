import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="register"
      className="py-20 bg-gradient-to-br from-teal-600 to-blue-600"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Ready to Elevate Your Research?
        </h2>
        <p
          className={`text-xl text-teal-50 mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Join thousands of researchers who trust Physio Research Hub for their
          publication needs. Register now and take the first step towards
          academic success.
        </p>
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBNhMxLokXhG8VEbRT1sJrQxJKGXtX7b1C4y45yeZjc7c62g/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-teal-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-2xl hover:shadow-white/50"
          >
            Register Your Service
            <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
        <p
          className={`mt-6 text-teal-100 text-sm transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Complete the registration form and our team will contact you within 24
          hours
        </p>
      </div>
    </section>
  );
}

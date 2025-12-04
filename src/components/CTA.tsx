import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="register" className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Elevate Your Research?
        </h2>
        <p className="text-xl text-teal-50 mb-10 leading-relaxed">
          Join thousands of researchers who trust Physio Research Hub for their
          publication needs. Register now and take the first step towards
          academic success.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfBNhMxLokXhG8VEbRT1sJrQxJKGXtX7b1C4y45yeZjc7c62g/viewform?vc=0&c=0&w=1&flr=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-10 py-5 bg-white text-teal-600 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-2xl"
        >
          Register Your Service
          <ArrowRight className="ml-3 h-6 w-6" />
        </a>
        <p className="mt-6 text-teal-100 text-sm">
          Complete the registration form and our team will contact you within 24
          hours
        </p>
      </div>
    </section>
  );
}

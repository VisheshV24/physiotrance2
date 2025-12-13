import { GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FacultyServicesStrip() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={`bg-teal-50 py-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-12'
          }`}>
            <GraduationCap className="h-8 w-8 text-teal-600 transition-transform duration-300 hover:scale-125 hover:rotate-12" />
          </div>
          <div className={`flex-1 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 transition-colors duration-300 hover:text-teal-600">
              Medical & Engineering Faculty Services
            </h2>
            <p className="text-gray-600 mt-1 transition-all duration-300 hover:text-gray-800">
              MBBS, BDS, Nursing, Pharmacy & Engineering — Research, Patents,
              Copyrights & Publications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


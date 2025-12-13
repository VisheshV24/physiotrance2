import { ClipboardList, Search, FileEdit, CheckCircle, LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: ClipboardList,
    title: 'Submit Your Requirements',
    description:
      'Share your research needs, deadlines, and specific requirements with our team.',
  },
  {
    icon: Search,
    title: 'Expert Analysis',
    description:
      'Our specialists analyze your work and recommend the best publication strategy.',
  },
  {
    icon: FileEdit,
    title: 'Professional Support',
    description:
      'Receive comprehensive support including editing, formatting, and submission guidance.',
  },
  {
    icon: CheckCircle,
    title: 'Successful Publication',
    description:
      'Your work gets published in prestigious indexed journals with our continuous support.',
  },
];

export default function Process() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="process" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to ensure your research reaches its full
            potential
          </p>
        </div>

        <div className="relative">
          <div className={`hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-teal-200 transform -translate-y-1/2 transition-all duration-1000 delay-500 ${
            sectionVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ${
                    sectionVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative inline-block mb-6">
                    <div className={`w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl ${
                      sectionVisible
                        ? 'opacity-100 scale-100 rotate-0'
                        : 'opacity-0 scale-75 -rotate-12'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 200}ms` }}
                    >
                      <Icon className="h-12 w-12 text-white transition-transform duration-300 hover:scale-110" />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-10 h-10 bg-white border-4 border-teal-600 rounded-full flex items-center justify-center font-bold text-teal-600 transition-all duration-500 ${
                      sectionVisible
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-0'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 400}ms` }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-teal-600">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed transition-colors duration-300 hover:text-gray-700">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ClipboardList, Search, FileEdit, CheckCircle } from 'lucide-react';

const steps = [
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
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to ensure your research reaches its full
            potential
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-teal-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white border-4 border-teal-600 rounded-full flex items-center justify-center font-bold text-teal-600">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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

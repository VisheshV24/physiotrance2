import { Users, FileCheck, Award, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '5000+',
    label: 'Satisfied Researchers',
  },
  {
    icon: FileCheck,
    value: '10,000+',
    label: 'Publications Supported',
  },
  {
    icon: Award,
    value: '500+',
    label: 'PhD Candidates Assisted',
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Served',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xl text-teal-100">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

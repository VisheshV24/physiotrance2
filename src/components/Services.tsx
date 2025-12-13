import {
  BookOpen,
  FileText,
  GraduationCap,
  Globe,
  Shield,
  Award,
  Microscope,
  PenTool,
  Users,
  Database,
  Copyright,
  Search,
  LucideIcon,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group p-8 bg-white rounded-xl border-2 border-gray-100 hover:border-teal-500 hover:shadow-xl transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Icon className="h-7 w-7 text-teal-600 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

const services: Service[] = [
  {
    icon: BookOpen,
    title: 'Research Publication',
    description:
      'Expert guidance for publishing in Scopus, Web of Science, PubMed, and other prestigious indexed journals.',
  },
  {
    icon: GraduationCap,
    title: 'PhD Assistance',
    description:
      'Complete PhD support including topic selection, synopsis writing, thesis development, and publication.',
  },
  {
    icon: FileText,
    title: 'Thesis Guidance & Building',
    description:
      'Professional thesis writing, structuring, and compilation services for all academic levels.',
  },
  {
    icon: Globe,
    title: 'Conference Paper Publication',
    description:
      'Support for international conference proceedings and presentation preparation.',
  },
  {
    icon: Shield,
    title: 'Plagiarism Services',
    description:
      'Comprehensive plagiarism checking using Turnitin and other premium tools.',
  },
  {
    icon: Award,
    title: 'Patent Services',
    description:
      'Patent filing assistance and intellectual property protection for your research innovations.',
  },
  {
    icon: PenTool,
    title: 'Manuscript Editing',
    description:
      'Professional editing, proofreading, and formatting to meet journal standards.',
  },
  {
    icon: Database,
    title: 'DOI Services',
    description:
      'Digital Object Identifier registration and management for your publications.',
  },
  {
    icon: Microscope,
    title: 'Research Methodology',
    description:
      'Expert consultation on research design, data analysis, and methodology.',
  },
  {
    icon: Users,
    title: 'Academic Writing Support',
    description:
      'Comprehensive writing assistance for research papers, articles, and academic content.',
  },
  {
    icon: Copyright,
    title: 'Copyright Services',
    description:
      'Secure legal protection for your research with professional copyright registration and documentation.',
  },
  {
    icon: Search,
    title: 'Literature Review Services',
    description:
      'Systematic literature review and research gap analysis for your study.',
  },
];

export default function Services() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive research and publication support tailored to your
            academic needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="/all-services"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg hover:shadow-teal-500/50"
          >
            View All Academic Services
          </a>
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-600 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBNhMxLokXhG8VEbRT1sJrQxJKGXtX7b1C4y45yeZjc7c62g/viewform?vc=0&c=0&w=1&flr=0"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg hover:shadow-teal-500/50"
          >
            Register for a Service
          </a>
        </div>
      </div>
    </section>
  );
}

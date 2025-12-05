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
} from 'lucide-react';

const services = [
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
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive research and publication support tailored to your
            academic needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl border-2 border-gray-100 hover:border-teal-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                      <Icon className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#register"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition transform hover:scale-105 shadow-lg"
          >
            Register for a Service
          </a>
        </div>
      </div>
    </section>
  );
}

import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Physiotrance  
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Physiotrance is a premier research and publication support
              organization dedicated to empowering researchers, scholars, and
              academic institutions worldwide.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With years of expertise in academic publishing, we provide
              comprehensive support services that help researchers navigate the
              complex landscape of scholarly publication and achieve their
              academic goals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of experienced professionals understands the challenges
              faced by researchers and offers personalized solutions to ensure
              your work reaches the right audience through prestigious indexed
              journals and conferences.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Research Team"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To facilitate seamless research publication and support academic
              excellence globally.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the most trusted partner in research and academic
              publication services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Excellence
            </h3>
            <p className="text-gray-600">
              Committed to delivering quality services that meet international
              standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Support
            </h3>
            <p className="text-gray-600">
              Personalized assistance at every step of your research journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import logo from "../assets/logo.png";

export default function AllServices() {
  const allServices = [
    "BPT UG Coaching Class- 3000/Month (full course 6 months), if only 1 Subject (1200/month)",
    "BPT UG Exam Preparation Class-2000 for a month",
    "MPT PG Coaching Class- 3000/Month (full course 6 months), if only 1 Subject (1200/month)",
    "MPT PG Exam Preparation Class-2000 for a month",
    "MPT Thesis Guidance- to be discussed on call Others- to be discussed on call",
    "Research/Articles/Case Report Publication- to be discussed on call (Min Charges 4k to 5.5k)",
    "Job Exam Preparation National (India) (Depends On Duration Min 4-5k Onwards)",
    "Job Exam Preparation International (Overseas) (Depends On Duration Min 5-6k Onwards)",
    "Research/Project Work/Thesis Topic Selection & Support UG,PG,Ph.D (800-1000k Onwards)",
    "Authorship Position & Academic contributions for various Journals",
    "CRE DRA AIIMS Central Govt. Job Prepration (Depends On Duration Min 4-5k Onwards)",
    "CUET, CET, NEET UG (Depends On Duration Min 4-5k Onwards)",
    "CAPF DEFENCE PHYSIOTHERAPY (Central) ,DSSB, NHM (State)",
    "Data & Statistical Analysis (UG,PG & PhD Phase Wise)",
    "Indian Govt Design Patent",
    "Indian Govt Utility Patent upto IPR Publication",
    "Indian Govt Copyright",
    "UK Govt Design Patent",
    "Canadian Govt Copyright",
    "South Africa Govt Utility Patent",
    "German Govt Utility Patent",
    "Indian Govt Utility Patent up to Grant",
    "Europe Govt Patent",
    "Clinical Trial Registry (CTRI) Registration",
    "Book Publication with ISBN (Amazon, Flipkart)",
    "Other (Customized Services)"
  ];

  const otherEServices = [
    "Logo Trademark Registration",
    "ISO Registration",
    "MSME/UDYAM Registration",
    "Company Registration , Pvt. Ltd, Section 8",
    "ITR/ IT Returns & Filing",
    "Website Development"
  ];

  const specialityGroups = [
    {
      name: "PhysioRehab Job Updates 6",
      link: "https://chat.whatsapp.com/IAqMsLf9gRHAt0s96QHkuR?mode=hqrt1"
    },
    {
      name: "PHYSIO_RESEARCH_HUB 03",
      link: "https://chat.whatsapp.com/Jm6Plj1iMYFKe6ExqAORDK?mode=hqrt1"
    },
    {
      name: "PhysioTrance Community",
      link: "https://chat.whatsapp.com/CtkYKqZMIxfKxXNwBkc7pf"
    },
    {
      name: "Speciality Network Hub",
      link: "https://chat.whatsapp.com/HGZ8RDwOzOcIP85LCdUBAd?mode=hqrt1"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Complete Academic Services
        </h1>

        <ul className="space-y-4 text-lg text-gray-700">
          {allServices.map((service, index) => (
            <li
              key={index}
              className="p-4 bg-gray-100 rounded-lg hover:bg-teal-50 border border-gray-200"
            >
              {index + 1}. {service}
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Other E-Services
          </h2>
          <ul className="space-y-4 text-lg text-gray-800">
            {otherEServices.map((service, index) => (
              <li
                key={index}
                className="p-4 bg-gray-100 rounded-lg hover:bg-teal-50 border border-gray-200"
              >
                {index + 1}. {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBNhMxLokXhG8VEbRT1sJrQxJKGXtX7b1C4y45yeZjc7c62g/viewform?vc=0&c=0&w=1&flr=0"
            className="px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition"
          >
            Register for a Service
          </a>
        </div>

        <div id="speciality-groups" className="mt-16 scroll-mt-32">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Join Speciality Groups Now
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Connect with peers, stay updated on jobs, research, education, and webinars.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {specialityGroups.map((group) => (
              <div
                key={group.link}
                className="flex items-center p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
              >
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={logo}
                    alt={`${group.name} logo`}
                    className="h-16 w-16 object-contain rounded-full border border-gray-100"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {group.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tap to join the official WhatsApp group.
                  </p>
                </div>
                <a
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition"
                >
                  Join
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

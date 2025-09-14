import React, { useState } from 'react';

const committees = [
  {
    id: 1,
    name: "United Nations Security Council (UNSC)",
    description: "The UNSC holds the primary responsibility for maintaining international peace and security. Delegates will deliberate on disputes in the South China Sea, covering territorial claims, freedom of navigation, and the risks of militarization.",
    agenda: "Ensuring International Peace and Security in the South China Sea – addressing territorial disputes, navigation freedom, militarization, fostering cooperation, upholding international law, and promoting regional stability.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Barack_Obama_chairs_a_United_Nations_Security_Council_meeting.jpg/1200px-Barack_Obama_chairs_a_United_Nations_Security_Council_meeting.jpg",
    brochure: ""
  },
  {
    id: 2,
    name: "United Nations General Assembly (UNGA)",
    description: "The UNGA is the main deliberative, policymaking, and representative body of the UN. Delegates will explore democratic backsliding in key Asian democracies, analyzing its impact on governance, civil liberties, and stability.",
    agenda: "Democratic Backsliding in Nepal, Indonesia, and Bangladesh – impacts on governance, civil liberties, protests, and state responses from negotiation to repression.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/UN_General_Assembly_hall.jpg",
    brochure: ""
  },
  {
    id: 3,
    name: "All India Political Parties Meet (AIPPM)",
    description: "A high-level simulation of discussions among Indian political parties. Delegates will deliberate on religious endowments, political implications, and governance challenges related to the Waqf (Amendment) Act, 2025.",
    agenda: "Religious Endowments and State Regulation: The Controversy of the Waqf (Amendment) Act, 2025",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/View_of_Lok_Sabha_chamber_in_the_New_Parliament_building%2C_New_Delhi.jpg/960px-View_of_Lok_Sabha_chamber_in_the_New_Parliament_building%2C_New_Delhi.jpg",
    brochure: ""
  },
  {
    id: 4,
    name: "United Nations Human Rights Council (UNHRC)",
    description: "The UNHRC addresses global human rights challenges. Delegates will debate the balance between national security and freedom of expression in the age of internet blackouts and censorship.",
    agenda: "Internet Blackouts & Censorship: National Security vs. Freedom of Expression",
    image: "https://www.genevaenvironmentnetwork.org/wp-content/uploads/2022/08/Human-Rights-Council-UN-Room-aspect-ratio-2000-1200.jpg",
    brochure: ""
  },
  {
    id: 5,
    name: "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
    description: "UNESCO promotes cultural heritage, education, and knowledge sharing. This beginner-friendly committee will focus on the role of AI in shaping cultural authenticity in art, literature, and multimedia.",
    agenda: "Protecting Cultural Authenticity and Implicit Meaning in Art, Literature, and Multimedia in the Era of AI-generated Content",
    image: "https://dam.media.un.org/Assets/V2/ChFVTjdTNTAwMDAwMDAwMDAwMxIPVFIxX1dBVEVSTUFSS0VEGi1cVFIxX1dBVEVSTUFSS0VEXGFkXDkwXGE0XGI3XDFkXFVONzMyMDYxNS5qcGciBAgBEA9AAWIJVU43MzIwNjE1~/2AM9LO5YM1DH/QD4FR7VKvFF6wIoV/UN7320615.jpg",
    brochure: ""
  },
  {
    id: 6,
    name: "United Nations Commission on the Status of Women (UNCSW)",
    description: "The UNCSW is a global body dedicated to gender equality and women’s rights. Delegates will focus on gendered violence in conflict zones and accountability mechanisms for perpetrators.",
    agenda: "Gendered Violence while in Conflict: Holding Attendees to Account and Responsibility",
    image: "https://s3.youthkiawaaz.com/wp-content/uploads/2021/10/22110340/10701991186_43bd21edd9_c.jpg",
    brochure: ""
  },
  {
    id: 7,
    name: "World Health Organization (WHO)",
    description: "The WHO leads international public health efforts. This committee will deliberate on the youth mental health crisis and its implications for societies worldwide.",
    agenda: "Youth Mental Health Crisis and What it Means to the Global Village",
    image: "https://unf.imgix.net/2023/02/cropped-WHO-Board-Room.png?auto=compress%2Cformat&ixlib=php-3.3.1",
    brochure: ""
  },
  {
    id: 8,
    name: "International Press (IP)",
    description: "The media body of the MUN responsible for covering debates, interviewing delegates, and publishing bulletins. Roles include reporters, photographers, caricaturists, and editors.",
    agenda: "Covering and Documenting Committee Proceedings, Interviews, and Daily Highlights",
    image: "https://cdn.pixabay.com/photo/2021/12/01/22/11/cameras-6839248_1280.jpg",
    brochure: ""
  }
];

const Committees = () => {
  const [activeCommittee, setActiveCommittee] = useState(null);

  return (
    <section id="committees" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Committees</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our conference features a diverse range of committees addressing pressing global issues. Each committee offers a unique experience for delegates to engage in substantive debate and diplomacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {committees.slice(0, 3).map((committee) => (
            <CommitteeCard key={committee.id} committee={committee} onClick={() => setActiveCommittee(committee.id)} />
          ))}
          <div className="md:col-span-3 flex justify-center flex-wrap gap-6">
            {committees.slice(3).map((committee) => (
              <CommitteeCard key={committee.id} committee={committee} onClick={() => setActiveCommittee(committee.id)} />
            ))}
          </div>
        </div>

        {activeCommittee && (
          <CommitteeModal
            committee={committees.find(c => c.id === activeCommittee)}
            onClose={() => setActiveCommittee(null)}
          />
        )}
      </div>
    </section>
  );
};

const CommitteeCard = ({ committee, onClick }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg flex flex-col justify-between max-w-sm">
    <div className="h-48 overflow-hidden mb-1">
      <img
        src={committee.image}
        alt={committee.name}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-red-600 text-center mb-2">{committee.name}</h3>
      <p className="text-gray-700 text-sm mb-2 leading-snug">
        {committee.description.length > 120
          ? `${committee.description.substring(0, 120)}...`
          : committee.description}
      </p>
      <div className="mb-3">
        <span className="text-sm font-semibold text-red-600 block mb-1">Agenda:</span>
        <p className="text-gray-600 text-sm italic leading-tight">{committee.agenda}</p>
      </div>
      <button
        onClick={onClick}
        className="w-full py-2 bg-red-600 hover:bg-red-500 text-white font-medium rounded-md transition-colors duration-300 mt-2"
      >
        Learn More
      </button>
    </div>
  </div>
);

const CommitteeModal = ({ committee, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-red-600">{committee.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <img src={committee.image} alt={committee.name} className="w-full h-64 object-cover rounded-lg" />
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-red-600 mb-2">Description</h4>
          <p className="text-gray-700">{committee.description}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-red-600 mb-2">Resources</h4>
          <p className="text-gray-700">
            Delegates are encouraged to review background guides, official documents, and prior resolutions available through the conference portal to prepare effectively.
          </p>
        </div>

        {committee.brochure && (
          <div className="flex justify-center mb-4">
            <a
              href={committee.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-md transition-colors duration-300"
            >
              Download Brochure
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Committees;

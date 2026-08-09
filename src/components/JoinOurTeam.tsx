import { Coffee, ChefHat, User } from 'lucide-react';

const roles = [
  {
    icon: Coffee,
    title: 'Barista',
    desc: 'Craft perfect coffee experiences and connect with our community.',
  },
  {
    icon: ChefHat,
    title: 'Chef',
    desc: 'Create delicious meals that complement our coffee culture.',
  },
  {
    icon: User,
    title: 'Server',
    desc: 'Provide exceptional service and create welcoming experiences.',
  }
];

export default function JoinOurTeam() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl text-white font-serif mb-6">Join Our Team</h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Be part of something special. We're looking for passionate individuals
          to help create memorable experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roles.map((role, idx) => (
          <div key={idx} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[32px] p-8 lg:p-10 text-center flex flex-col items-center hover:bg-black/60 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#d4a373]/10 flex items-center justify-center text-[#d4a373] mb-6">
              <role.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl text-white font-serif mb-4">{role.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-10 flex-grow">{role.desc}</p>
            <button className="w-full bg-[#d4a373] text-[#110d0a] px-8 py-3.5 rounded-full font-semibold hover:bg-[#e6b981] transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

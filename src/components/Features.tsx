import { Coffee, CupSoda, User, Star } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Premium\nQuality Beans',
    desc: 'We carefully select the best beans from around the world to ensure exceptional quality.'
  },
  {
    icon: CupSoda,
    title: 'Cozy Atmosphere\n& Comfort',
    desc: 'Our cozy spaces are designed for relaxation, work, and meaningful conversations.'
  },
  {
    icon: User,
    title: 'Personalized\nExperience',
    desc: 'We tailor every cup to your taste with the expertise of our professional baristas.'
  },
  {
    icon: Star,
    title: 'Professional\nBaristas',
    desc: 'Our team has years of experience and a true passion for creating perfect coffee.'
  }
];

export default function Features() {
  return (
    <section className="px-8 lg:px-16 py-12 max-w-7xl mx-auto border-t border-b border-white/5 my-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-10 relative z-10">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-start space-y-5">
            <div className="text-[#d4a373] p-3 border border-[#d4a373]/20 rounded-2xl bg-[#d4a373]/5">
              <feature.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-serif text-[1.35rem] leading-tight whitespace-pre-line">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

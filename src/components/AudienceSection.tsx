import { GraduationCap, Users, Award, Briefcase } from 'lucide-react';

const audiences = [
  {
    icon: <GraduationCap className="h-10 w-10 text-sky-500" />,
    title: "Freshers",
    description: "Kickstart your career with in-demand digital marketing skills",
  },
  {
    icon: <Users className="h-10 w-10 text-sky-500" />,
    title: "Working Professionals",
    description: "Upskill and advance your career with digital marketing expertise",
  },
  {
    icon: <Award className="h-10 w-10 text-sky-500" />,
    title: "Students",
    description: "Get a head start in your career while still studying",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-sky-500" />,
    title: "Business Owners & Freelancers",
    description: "Market your business effectively or add services to your portfolio",
  }
];

const AudienceSection = () => {
  return (
    <section id="audience" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Who Can Join
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Our course is designed for everyone looking to succeed in digital marketing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative flex flex-col items-center text-center bg-white dark:bg-slate-900 rounded-lg p-8 shadow-md h-full">
                <div className="mb-4">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {audience.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
import { Search, MousePointer, Layout, MessageSquareShare, Briefcase, Gift } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-8 w-8 text-sky-500" />,
    title: "SEO Basics",
    description: "Rank Websites with On-Page & Off-Page Techniques",
  },
  {
    icon: <MousePointer className="h-8 w-8 text-sky-500" />,
    title: "Google Ads & Meta Ads",
    description: "Live Ad Campaign Setup",
  },
  {
    icon: <Layout className="h-8 w-8 text-sky-500" />,
    title: "Landing Page Creation",
    description: "Design Conversion-Ready Pages",
  },
  {
    icon: <MessageSquareShare className="h-8 w-8 text-sky-500" />,
    title: "WhatsApp Automation",
    description: "Smart Lead Follow-up System",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-sky-500" />,
    title: "Freelancing Platforms",
    description: "Start Earning from Day 1",
  },
  {
    icon: <Gift className="h-8 w-8 text-sky-500" />,
    title: "Bonus",
    description: "Interview Tips + Resume Building + Earning Tricks",
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What You'll Learn
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Master these high-demand skills and start your digital marketing career
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform"
            >
              <div className="p-4 bg-sky-50 dark:bg-sky-900/20 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
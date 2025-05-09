import { Video, ClipboardCheck, MessageCircle, Award, Briefcase, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Video className="h-10 w-10 text-sky-500" />,
    title: "Live + Recorded Lessons",
    description: "Attend interactive live sessions and access recordings for revision"
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-sky-500" />,
    title: "100% Practical Assignments Daily",
    description: "Apply what you learn with hands-on tasks designed for real-world application"
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-sky-500" />,
    title: "WhatsApp Group Support",
    description: "Get your questions answered quickly with dedicated group support"
  },
  {
    icon: <Award className="h-10 w-10 text-sky-500" />,
    title: "Branded Certificate",
    description: "Earn an industry-recognized certificate from Digital Digitizers"
  },
  {
    icon: <Briefcase className="h-10 w-10 text-sky-500" />,
    title: "Client Projects / Internship",
    description: "Gain real experience through client projects and internship opportunities"
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-sky-500" />,
    title: "Affiliate Income Opportunity",
    description: "Start earning through our affiliate program while you learn"
  }
];

const CourseFeatures = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Course Features
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Everything you need to succeed in your digital marketing journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start p-6 bg-slate-50 dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
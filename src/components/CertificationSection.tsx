import { Award, Check } from 'lucide-react';

const benefits = [
  "Industry-recognized credential",
  "Validates your digital marketing skills",
  "Boosts your resume and LinkedIn profile",
  "Increases your employability",
  "Helps you stand out in job applications",
  "Shows commitment to professional development"
];

const CertificationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg blur opacity-25"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Digital Marketing Certificate" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center justify-center p-2 bg-sky-100 dark:bg-sky-900/30 rounded-full text-sky-600 dark:text-sky-400 mb-4">
              <Award className="h-6 w-6" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Get Certified by Industry Leaders
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Earn a professional certificate from Digital Digitizers, India's top digital marketing company. 
              Our certificates are recognized across the industry and will boost your career prospects.
            </p>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md mb-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Certificate Benefits
              </h3>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-sky-500" />
                    </div>
                    <p className="ml-3 text-slate-600 dark:text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-pulse">
              <a 
                href="#pricing" 
                className="inline-flex items-center justify-center px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-md transition-colors duration-300"
              >
                Get Certified Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import EnrollmentModal from './EnrollmentModal';

const features = [
  "7 Days of Live Training",
  "Lifetime Access to Course Material",
  "100% Practical Assignments",
  "WhatsApp Group Support",
  "Digital Digitizers Certificate",
  "Job / Freelance Guarantee",
  "Client Projects / Internship Opportunity",
  "Affiliate Income Opportunity"
];

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Pricing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Invest in your future with our affordable digital marketing course
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg blur opacity-25"></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">7-Day Digital Marketing Crash Course</h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">Complete package to jumpstart your digital marketing career</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 line-through">₹4,999</span>
                    <span className="ml-2 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-semibold rounded">80% OFF</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">
                    ₹999
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-sky-500" />
                    </div>
                    <p className="ml-3 text-slate-700 dark:text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mb-8">
                <p className="text-center text-lg font-medium text-slate-700 dark:text-slate-300">
                  7 Days. Lifetime Access. Job / Freelance Guarantee.
                </p>
              </div>
              
              <div className="text-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group w-full md:w-auto px-6 py-4 bg-sky-500 hover:bg-sky-600 text-white text-lg font-medium rounded-md transition-colors duration-300 inline-flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">ENROLL NOW</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  Limited seats available. Next batch starting soon!
                </p>
              </div>
            </div>
            
            <div className="bg-sky-50 dark:bg-sky-900/20 p-4 border-t border-sky-100 dark:border-sky-800/50">
              <p className="text-center text-slate-700 dark:text-slate-300">
                <span className="font-medium">100% Satisfaction Guarantee.</span> If you're not satisfied with the course, get a full refund within 2 days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <EnrollmentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default PricingSection;
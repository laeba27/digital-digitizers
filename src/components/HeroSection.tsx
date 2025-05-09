import { ArrowRight, CheckCircle } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white dark:from-slate-900 dark:to-slate-950 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200 dark:bg-sky-900/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 -left-24 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 text-sm font-medium mb-6 animate-pulse">
              <span className="mr-2 bg-sky-500 rounded-full w-2 h-2"></span>
              Limited Time Offer - Enrollment Closing Soon!
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Become a Digital Marketer in Just{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                7 Days
              </span>{' '}
              — Guaranteed Job or Freelance Earning!
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Powered by Digital Digitizers – India's No.1 Digital Marketing Company
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a 
                href="#pricing"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium text-lg rounded-md transition-colors duration-300"
              >
                JOIN NOW
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-slate-700 dark:text-slate-300 font-medium">
                Limited Seats | Live Training | Certification Included
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900/50 rounded-lg p-4 shadow-md">
              <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">Next batch starts in:</p>
              <CountdownTimer />
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white dark:bg-slate-900 p-6 md:p-8 rounded-lg shadow-xl">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 text-sm text-sky-500 dark:text-sky-400 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    <span>100% Job Placement Assistance</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 text-sm text-sky-500 dark:text-sky-400 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    <span>Live Training with Industry Experts</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 text-sm text-sky-500 dark:text-sky-400 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    <span>Hands-on Practice with Real Campaigns</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 text-sm text-sky-500 dark:text-sky-400 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    <span>Certified Professional Certificate</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Digital Marketing Training Session" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
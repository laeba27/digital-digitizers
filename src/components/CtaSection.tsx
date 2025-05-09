import { PhoneCall, ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait – Your Digital Career Starts Today!
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-sky-50">
            Get Trained by India's Top Digital Marketing Experts.
            Limited seats available for the next batch!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#pricing"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-sky-50 text-sky-600 font-medium text-lg rounded-md transition-colors duration-300"
            >
              JOIN NOW
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-sky-600 border-2 border-white text-white font-medium text-lg rounded-md transition-colors duration-300"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              Talk to an Advisor
            </a>
          </div>
          
          <div className="mt-12 bg-white/10 rounded-lg p-6 max-w-2xl mx-auto backdrop-blur-sm">
            <p className="font-medium text-lg">
              "Investing in knowledge pays the best interest." - Benjamin Franklin
            </p>
            <p className="mt-4">
              Take the first step towards a successful digital marketing career today. Our experts are ready to guide you on every step of your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
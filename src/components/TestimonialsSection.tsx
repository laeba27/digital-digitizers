import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I landed my first client within 10 days of joining this crash course. It's magic!",
    name: "Ravi",
    position: "Freelancer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "Their WhatsApp system and real ad training helped me get a job offer within 2 weeks.",
    name: "Meena",
    position: "Digital Marketing Specialist",
    image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "As a business owner, this course helped me understand digital marketing for my company. Worth every penny!",
    name: "Amit",
    position: "Entrepreneur",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The practical assignments and real-world projects gave me the confidence to start freelancing immediately.",
    name: "Priya",
    position: "Content Marketer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Student Testimonials
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Hear from our successful students who transformed their careers
          </p>
        </div>
        
        <div className="relative">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-slate-950 rounded-lg shadow-lg p-8 md:p-10 h-full">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="h-5 w-5 text-yellow-400 fill-current" 
                              fill="currentColor"
                            />
                          ))}
                        </div>
                        <blockquote className="text-xl italic text-slate-700 dark:text-slate-300 mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                          <div className="text-sky-600 dark:text-sky-400">{testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:translate-x-0">
            <button
              onClick={() => {
                prev();
                setAutoplay(false);
              }}
              className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-slate-800 dark:text-slate-200" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-0">
            <button
              onClick={() => {
                next();
                setAutoplay(false);
              }}
              className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-slate-800 dark:text-slate-200" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                setAutoplay(false);
              }}
              className={`mx-1 h-3 w-3 rounded-full focus:outline-none ${
                current === index 
                  ? 'bg-sky-500' 
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
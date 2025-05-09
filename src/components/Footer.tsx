import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-sky-400">Digital Digitizers</h3>
            <p className="text-slate-300 mb-6">
              India's premier digital marketing training company. We help people transform their careers through industry-relevant training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-sky-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-sky-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-slate-300 hover:text-white transition-colors">Course Features</a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">About Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-sky-400">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Refund Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-sky-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sky-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  123 Digital Avenue,<br />
                  Chennai, Tamil Nadu 600001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-sky-400 mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-slate-300 hover:text-white transition-colors">
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-sky-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@digitaldigitizers.com" className="text-slate-300 hover:text-white transition-colors">
                  info@digitaldigitizers.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-400">
            &copy; {currentYear} Digital Digitizers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
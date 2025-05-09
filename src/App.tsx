import { ThemeProvider } from './components/theme/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AudienceSection from './components/AudienceSection';
import CourseFeatures from './components/CourseFeatures';
import CertificationSection from './components/CertificationSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="digital-digitizers-theme">
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <AudienceSection />
          <CourseFeatures />
          <CertificationSection />
          <PricingSection />
          <TestimonialsSection />
          <CtaSection />
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster position="top-center" />
      </div>
    </ThemeProvider>
  );
}

export default App;
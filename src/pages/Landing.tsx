import Navbar from '@/components/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import EventsShowcase from '@/components/landing/EventsShowcase';
import Footer from '@/components/landing/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <EventsShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;

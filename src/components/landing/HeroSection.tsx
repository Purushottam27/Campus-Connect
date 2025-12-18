import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Your Gateway to Campus Life</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="gradient-text">Campus</span>
          <br />
          <span className="text-foreground">Connect</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Discover clubs, explore events, and connect with your college community. 
          Your journey to an unforgettable campus experience starts here.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/login">
            <Button size="lg" className="glow-primary group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-border/50 hover:bg-secondary">
            Learn More
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <StatCard icon={Users} value="8" label="Active Clubs" />
          <StatCard icon={Calendar} value="20+" label="Events/Month" />
          <StatCard icon={Users} value="630+" label="Members" />
          <StatCard icon={Sparkles} value="100%" label="Free to Join" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, value, label }: { icon: any; value: string; label: string }) => (
  <div className="glass-card rounded-xl p-4 text-center">
    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
    <div className="text-2xl font-bold text-foreground">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

export default HeroSection;

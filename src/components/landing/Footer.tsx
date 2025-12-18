import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold gradient-text">CampusConnect</span>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Clubs</a>
            <a href="#" className="hover:text-primary transition-colors">Events</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 CampusConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

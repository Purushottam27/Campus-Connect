import { events } from '@/data/mockData';
import { Calendar, MapPin, Clock, ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const EventsShowcase = () => {
  const upcomingEvents = events.filter(e => !e.isPast).slice(0, 6);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Calendar className="w-3 h-3 mr-1" />
            Upcoming Events
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Don't Miss <span className="gradient-text">What's Happening</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore exciting events from various clubs. Login to register and get full access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/login">
            <Button variant="outline" size="lg" className="group">
              <Lock className="w-4 h-4 mr-2" />
              Login to See All Events
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ event }: { event: typeof events[0] }) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.posterUrl}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <Badge className="absolute top-3 right-3 bg-primary/90">
          {event.price}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
          <span className="text-primary">{event.clubName}</span>
        </div>
        <h3 className="text-lg font-semibold line-clamp-1 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {event.description}
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {event.time}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {event.venue}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link to="/login" className="w-full">
          <Button variant="secondary" className="w-full group/btn">
            <Lock className="w-3 h-3 mr-2" />
            Login to Register
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventsShowcase;

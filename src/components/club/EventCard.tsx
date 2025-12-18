import { Event } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, IndianRupee } from 'lucide-react';

interface EventCardProps {
  event: Event;
  onRegister?: () => void;
  isPast?: boolean;
}

const EventCard = ({ event, onRegister, isPast = false }: EventCardProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.posterUrl} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        {isPast && (
          <Badge className="absolute top-3 right-3 bg-muted">Past Event</Badge>
        )}
        {!isPast && event.price === 'Free' && (
          <Badge className="absolute top-3 right-3 bg-green-600">Free</Badge>
        )}
      </div>
      
      <CardContent className="p-5 space-y-4">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{event.venue}</span>
          </div>
          {event.price !== 'Free' && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <IndianRupee className="w-4 h-4 text-primary" />
              <span>{event.price}</span>
            </div>
          )}
        </div>

        {!isPast && onRegister && (
          <Button 
            className="w-full mt-4" 
            onClick={onRegister}
          >
            Register Now
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;

import { Event } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, IndianRupee, Pencil, Trash2, Users } from 'lucide-react';

interface EventCardWithControlsProps {
  event: Event;
  onRegister?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onViewStudents?: () => void;
  isPast?: boolean;
  isClubHead?: boolean;
}

const EventCardWithControls = ({ 
  event, 
  onRegister, 
  onEdit, 
  onDelete, 
  onViewStudents,
  isPast = false, 
  isClubHead = false 
}: EventCardWithControlsProps) => {
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
        
        {isClubHead && (
          <div className="absolute top-3 left-3 flex gap-2">
            <Button 
              size="sm" 
              variant="secondary"
              className="h-8 w-8 p-0"
              onClick={onEdit}
            >
              <Pencil className="w-4 h-4" />
            </Button>
            <Button 
              size="sm" 
              variant="destructive"
              className="h-8 w-8 p-0"
              onClick={onDelete}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
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

        <div className="flex gap-2 mt-4">
          {!isPast && onRegister && !isClubHead && (
            <Button className="flex-1" onClick={onRegister}>
              Register Now
            </Button>
          )}
          
          {isClubHead && (
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={onViewStudents}
            >
              <Users className="w-4 h-4 mr-2" />
              View Enrolled ({8})
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCardWithControls;

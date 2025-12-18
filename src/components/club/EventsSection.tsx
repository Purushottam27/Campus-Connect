import { useState } from 'react';
import { Event } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EventCard from './EventCard';
import RegistrationModal from './RegistrationModal';
import { CalendarDays, History } from 'lucide-react';

interface EventsSectionProps {
  upcomingEvents: Event[];
  pastEvents: Event[];
}

const EventsSection = ({ upcomingEvents, pastEvents }: EventsSectionProps) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Events</h2>
      
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="upcoming" className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            Upcoming ({upcomingEvents.length})
          </TabsTrigger>
          <TabsTrigger value="past" className="flex items-center gap-2">
            <History className="w-4 h-4" />
            Past ({pastEvents.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="mt-6">
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  onRegister={() => handleRegister(event)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <CalendarDays className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No upcoming events at the moment.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="past" className="mt-6">
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map(event => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  isPast
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <History className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No past events to display.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <RegistrationModal 
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default EventsSection;

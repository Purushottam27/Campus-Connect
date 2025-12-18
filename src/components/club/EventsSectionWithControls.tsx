import { useState } from 'react';
import { Event } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import EventCardWithControls from './EventCardWithControls';
import RegistrationModal from './RegistrationModal';
import AddEventModal from './AddEventModal';
import EditEventModal from './EditEventModal';
import EnrolledStudentsModal from './EnrolledStudentsModal';
import { CalendarDays, History, Plus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface EventsSectionWithControlsProps {
  upcomingEvents: Event[];
  pastEvents: Event[];
  clubId: string;
  clubName: string;
  isClubHead: boolean;
}

const EventsSectionWithControls = ({ 
  upcomingEvents, 
  pastEvents, 
  clubId, 
  clubName, 
  isClubHead 
}: EventsSectionWithControlsProps) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isStudentsModalOpen, setIsStudentsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<Event | null>(null);

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setIsRegisterModalOpen(true);
  };

  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
    setIsEditModalOpen(true);
  };

  const handleDelete = (event: Event) => {
    setEventToDelete(event);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (eventToDelete) {
      toast({
        title: "Event Deleted",
        description: `"${eventToDelete.title}" has been deleted.`,
      });
      setIsDeleteDialogOpen(false);
      setEventToDelete(null);
    }
  };

  const handleViewStudents = (event: Event) => {
    setSelectedEvent(event);
    setIsStudentsModalOpen(true);
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Events</h2>
        {isClubHead && (
          <Button onClick={() => setIsAddModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        )}
      </div>
      
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
                <EventCardWithControls 
                  key={event.id} 
                  event={event}
                  isClubHead={isClubHead}
                  onRegister={() => handleRegister(event)}
                  onEdit={() => handleEdit(event)}
                  onDelete={() => handleDelete(event)}
                  onViewStudents={() => handleViewStudents(event)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <CalendarDays className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No upcoming events at the moment.</p>
              {isClubHead && (
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setIsAddModalOpen(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create your first event
                </Button>
              )}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="past" className="mt-6">
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map(event => (
                <EventCardWithControls 
                  key={event.id} 
                  event={event} 
                  isPast
                  isClubHead={isClubHead}
                  onEdit={() => handleEdit(event)}
                  onDelete={() => handleDelete(event)}
                  onViewStudents={() => handleViewStudents(event)}
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
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

      <AddEventModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        clubId={clubId}
        clubName={clubName}
      />

      <EditEventModal
        event={selectedEvent}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

      <EnrolledStudentsModal
        event={selectedEvent}
        isOpen={isStudentsModalOpen}
        onClose={() => setIsStudentsModalOpen(false)}
      />

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="bg-card border-border">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Event</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{eventToDelete?.title}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default EventsSectionWithControls;

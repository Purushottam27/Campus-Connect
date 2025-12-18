import { Event } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Clock, MapPin, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface RegistrationModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ event, isOpen, onClose }: RegistrationModalProps) => {
  const { user } = useAuth();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!event) return null;

  const handleRegister = async () => {
    setIsLoading(true);
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsRegistered(true);
    setIsLoading(false);
    
    toast({
      title: "Registration Successful!",
      description: `You are now registered for "${event.title}". A confirmation email will be sent shortly.`,
    });
  };

  const handleClose = () => {
    setIsRegistered(false);
    onClose();
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!isRegistered ? (
          <>
            <DialogHeader>
              <DialogTitle>Register for Event</DialogTitle>
              <DialogDescription>
                Confirm your registration for this event
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="p-4 rounded-lg bg-muted/50">
                <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground mb-1">Registering as:</p>
                <p className="font-medium">{user?.name}</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>

              {event.price !== 'Free' && (
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm text-muted-foreground">Registration Fee</p>
                  <p className="text-xl font-bold text-primary">{event.price}</p>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={handleClose} className="flex-1" disabled={isLoading}>
                Cancel
              </Button>
              <Button onClick={handleRegister} className="flex-1" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Registering...
                  </>
                ) : (
                  'Confirm Registration'
                )}
              </Button>
            </div>
          </>
        ) : (
          <div className="py-8 text-center space-y-4 animate-fade-in">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-green-500/10">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Registration Successful!</h3>
              <p className="text-muted-foreground">
                You have been registered for <span className="text-foreground font-medium">{event.title}</span>
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              A confirmation email will be sent to {user?.email}
            </p>
            <Button onClick={handleClose} className="mt-4">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;

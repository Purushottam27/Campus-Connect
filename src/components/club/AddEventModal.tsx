import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { eventSchema } from '@/lib/validations';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubId: string;
  clubName: string;
}

const AddEventModal = ({ isOpen, onClose, clubId, clubName }: AddEventModalProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    price: '',
    posterUrl: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate with Zod
    try {
      eventSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        return;
      }
    }
    
    setIsLoading(true);
    
    // Simulate adding event
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Event Created!",
      description: `"${formData.title}" has been added to ${clubName}.`,
    });
    
    setFormData({ title: '', description: '', date: '', time: '', venue: '', price: '', posterUrl: '' });
    setIsLoading(false);
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Add New Event</DialogTitle>
          <p className="text-sm text-muted-foreground">Create an event for {clubName}</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Enter event title"
              className={errors.title ? 'border-destructive' : ''}
            />
            {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Describe your event"
              className={errors.description ? 'border-destructive' : ''}
            />
            {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className={errors.date ? 'border-destructive' : ''}
              />
              {errors.date && <p className="text-sm text-destructive">{errors.date}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleChange('time', e.target.value)}
                className={errors.time ? 'border-destructive' : ''}
              />
              {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="venue">Venue</Label>
            <Input
              id="venue"
              value={formData.venue}
              onChange={(e) => handleChange('venue', e.target.value)}
              placeholder="Event location"
              className={errors.venue ? 'border-destructive' : ''}
            />
            {errors.venue && <p className="text-sm text-destructive">{errors.venue}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price (leave empty for Free)</Label>
            <Input
              id="price"
              value={formData.price}
              onChange={(e) => handleChange('price', e.target.value)}
              placeholder="e.g., ₹200 or Free"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="posterUrl">Poster URL</Label>
            <Input
              id="posterUrl"
              value={formData.posterUrl}
              onChange={(e) => handleChange('posterUrl', e.target.value)}
              placeholder="https://example.com/poster.jpg"
              className={errors.posterUrl ? 'border-destructive' : ''}
            />
            {errors.posterUrl && <p className="text-sm text-destructive">{errors.posterUrl}</p>}
            <p className="text-xs text-muted-foreground">Enter a URL for the event poster image</p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1" disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Event'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEventModal;

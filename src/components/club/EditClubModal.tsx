import { useState, useEffect } from 'react';
import { Club } from '@/data/mockData';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface EditClubModalProps {
  club: Club | null;
  isOpen: boolean;
  onClose: () => void;
}

const EditClubModal = ({ club, isOpen, onClose }: EditClubModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    shortDescription: '',
    fullDescription: '',
    facultyName: '',
    facultyDepartment: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (club) {
      setFormData({
        name: club.name,
        shortDescription: club.shortDescription,
        fullDescription: club.fullDescription,
        facultyName: club.facultyHead.name,
        facultyDepartment: club.facultyHead.department
      });
    }
  }, [club]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Club Updated!",
      description: `"${formData.name}" information has been updated successfully.`,
    });
    
    setIsLoading(false);
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Edit Club Information</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="club-name">Club Name</Label>
            <Input
              id="club-name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="short-desc">Short Description</Label>
            <Input
              id="short-desc"
              value={formData.shortDescription}
              onChange={(e) => handleChange('shortDescription', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="full-desc">Full Description</Label>
            <Textarea
              id="full-desc"
              value={formData.fullDescription}
              onChange={(e) => handleChange('fullDescription', e.target.value)}
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="faculty-name">Faculty Head Name</Label>
              <Input
                id="faculty-name"
                value={formData.facultyName}
                onChange={(e) => handleChange('facultyName', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="faculty-dept">Department</Label>
              <Input
                id="faculty-dept"
                value={formData.facultyDepartment}
                onChange={(e) => handleChange('facultyDepartment', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1" disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditClubModal;

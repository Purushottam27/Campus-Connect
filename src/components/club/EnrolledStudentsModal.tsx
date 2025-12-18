import { Event } from '@/data/mockData';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Mail } from 'lucide-react';

interface EnrolledStudentsModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

// Mock enrolled students data
const mockEnrolledStudents = [
  { id: '1', name: 'Aarav Sharma', email: 'aarav.sharma@college.edu', registeredAt: '2024-02-01' },
  { id: '2', name: 'Priya Patel', email: 'priya.patel@college.edu', registeredAt: '2024-02-02' },
  { id: '3', name: 'Rohan Kumar', email: 'rohan.kumar@college.edu', registeredAt: '2024-02-03' },
  { id: '4', name: 'Ananya Singh', email: 'ananya.singh@college.edu', registeredAt: '2024-02-04' },
  { id: '5', name: 'Vikram Reddy', email: 'vikram.reddy@college.edu', registeredAt: '2024-02-05' },
  { id: '6', name: 'Meera Iyer', email: 'meera.iyer@college.edu', registeredAt: '2024-02-06' },
  { id: '7', name: 'Arjun Das', email: 'arjun.das@college.edu', registeredAt: '2024-02-07' },
  { id: '8', name: 'Kavya Nair', email: 'kavya.nair@college.edu', registeredAt: '2024-02-08' },
];

const EnrolledStudentsModal = ({ event, isOpen, onClose }: EnrolledStudentsModalProps) => {
  if (!event) return null;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Enrolled Students
          </DialogTitle>
          <p className="text-sm text-muted-foreground">{event.title}</p>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-sm">
              {mockEnrolledStudents.length} Students Registered
            </Badge>
          </div>

          <div className="max-h-96 overflow-y-auto space-y-2">
            {mockEnrolledStudents.map((student, index) => (
              <div 
                key={student.id} 
                className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{student.name}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {student.email}
                    </p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(student.registeredAt)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnrolledStudentsModal;

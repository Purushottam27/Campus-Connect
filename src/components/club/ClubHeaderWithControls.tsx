import { useState } from 'react';
import { Club } from '@/data/mockData';
import { Users, GraduationCap, ArrowLeft, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import EditClubModal from './EditClubModal';

interface ClubHeaderWithControlsProps {
  club: Club;
  isClubHead: boolean;
}

const ClubHeaderWithControls = ({ club, isClubHead }: ClubHeaderWithControlsProps) => {
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/dashboard')}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
        
        {isClubHead && (
          <Button 
            variant="outline"
            onClick={() => setIsEditModalOpen(true)}
          >
            <Settings className="w-4 h-4 mr-2" />
            Edit Club Info
          </Button>
        )}
      </div>
      
      <div className="glass-card p-8 rounded-xl">
        <h1 className="text-4xl font-bold gradient-text mb-4">{club.name}</h1>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {club.fullDescription}
        </p>
        
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-5 h-5 text-primary" />
            <span>{club.memberCount} Members</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span>Faculty Head: <span className="text-foreground">{club.facultyHead.name}</span></span>
            <span className="text-sm">({club.facultyHead.department})</span>
          </div>
        </div>
      </div>

      <EditClubModal
        club={club}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </div>
  );
};

export default ClubHeaderWithControls;

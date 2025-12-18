import { Club } from '@/data/mockData';
import { Users, GraduationCap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ClubHeaderProps {
  club: Club;
}

const ClubHeader = ({ club }: ClubHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/dashboard')}
        className="text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Button>
      
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
    </div>
  );
};

export default ClubHeader;

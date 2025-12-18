import { ClubMember } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Star } from 'lucide-react';

interface LeadershipSectionProps {
  leadership: ClubMember[];
  facultyHead: { name: string; department: string };
}

const LeadershipSection = ({ leadership, facultyHead }: LeadershipSectionProps) => {
  const getRoleIcon = (role: string) => {
    if (role === 'President') return <Crown className="w-4 h-4 text-yellow-500" />;
    return <Star className="w-4 h-4 text-primary" />;
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Core Leadership Team</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {leadership.map((member, index) => (
          <Card 
            key={index} 
            className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300"
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                {getRoleIcon(member.role)}
                <span className="text-sm text-primary font-medium">{member.role}</span>
              </div>
              <p className="font-semibold text-foreground">{member.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;

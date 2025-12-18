import { useParams, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import { clubs, events } from '@/data/mockData';
import ClubHeaderWithControls from '@/components/club/ClubHeaderWithControls';
import LeadershipSection from '@/components/club/LeadershipSection';
import DomainsSection from '@/components/club/DomainsSection';
import EventsSectionWithControls from '@/components/club/EventsSectionWithControls';

const ClubDashboard = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const club = clubs.find(c => c.id === clubId);

  if (!club) {
    return <Navigate to="/dashboard" replace />;
  }

  const isClubHead = user?.role === 'club_head' && user?.clubId === clubId;
  const clubEvents = events.filter(e => e.clubId === clubId);
  const upcomingEvents = clubEvents.filter(e => !e.isPast);
  const pastEvents = clubEvents.filter(e => e.isPast);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl space-y-8">
          <ClubHeaderWithControls club={club} isClubHead={isClubHead} />
          <LeadershipSection leadership={club.leadership} facultyHead={club.facultyHead} />
          <DomainsSection domains={club.domains} />
          <EventsSectionWithControls 
            upcomingEvents={upcomingEvents} 
            pastEvents={pastEvents}
            clubId={club.id}
            clubName={club.name}
            isClubHead={isClubHead}
          />
        </div>
      </main>
    </div>
  );
};

export default ClubDashboard;

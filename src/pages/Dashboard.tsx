import { useState, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { clubs } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, ArrowRight, Search, X } from 'lucide-react';

type FilterType = 'all' | 'large' | 'medium' | 'small';

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredClubs = useMemo(() => {
    let result = clubs;
    
    // Apply search filter
    if (searchQuery.trim()) {
      result = result.filter(club => 
        club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        club.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply size filter
    switch (activeFilter) {
      case 'large':
        result = result.filter(club => club.memberCount >= 80);
        break;
      case 'medium':
        result = result.filter(club => club.memberCount >= 50 && club.memberCount < 80);
        break;
      case 'small':
        result = result.filter(club => club.memberCount < 50);
        break;
    }
    
    return result;
  }, [searchQuery, activeFilter]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All Clubs', value: 'all' },
    { label: 'Large (80+)', value: 'large' },
    { label: 'Medium (50-79)', value: 'medium' },
    { label: 'Small (<50)', value: 'small' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, <span className="gradient-text">{user?.name}</span>!
            </h1>
            <p className="text-muted-foreground">
              {user?.role === 'club_head' 
                ? 'Manage your club and events from here.' 
                : 'Explore clubs and discover amazing events.'}
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-6 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 bg-input border-border/50 focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.value}
                  variant={activeFilter === filter.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(filter.value)}
                  className="transition-all duration-200"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">
              {activeFilter === 'all' ? 'All Clubs' : `${filters.find(f => f.value === activeFilter)?.label}`}
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredClubs.length} {filteredClubs.length === 1 ? 'club' : 'clubs'} found
            </span>
          </div>

          {filteredClubs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredClubs.map((club, index) => (
                <Card 
                  key={club.id} 
                  className="glass-card hover:border-primary/50 transition-all duration-300 group animate-fade-in hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {club.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {club.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Users className="w-4 h-4" />
                      <span>{club.memberCount} members</span>
                    </div>
                    <Button 
                      variant="secondary" 
                      className="w-full group/btn"
                      onClick={() => navigate(`/club/${club.id}`)}
                    >
                      View Dashboard
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No clubs found matching your criteria.</p>
              <Button 
                variant="link" 
                onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
                className="mt-2"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

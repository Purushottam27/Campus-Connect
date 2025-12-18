import { Domain } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Video, 
  FileText, 
  Settings, 
  Megaphone, 
  Share2, 
  Palette 
} from 'lucide-react';

interface DomainsSectionProps {
  domains: Domain[];
}

const DomainsSection = ({ domains }: DomainsSectionProps) => {
  const getDomainIcon = (domainName: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Technical': <Code className="w-5 h-5" />,
      'Videography': <Video className="w-5 h-5" />,
      'Content': <FileText className="w-5 h-5" />,
      'Management': <Settings className="w-5 h-5" />,
      'Promotion': <Megaphone className="w-5 h-5" />,
      'Social Media': <Share2 className="w-5 h-5" />,
      'Graphics': <Palette className="w-5 h-5" />
    };
    return icons[domainName] || <Settings className="w-5 h-5" />;
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Domain-Wise Team Structure</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {domains.map((domain, index) => (
          <Card 
            key={index} 
            className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300"
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {getDomainIcon(domain.name)}
                </div>
                {domain.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Badge variant="secondary" className="mb-2">Domain Head</Badge>
                <p className="font-medium text-foreground">{domain.head}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Team Members</p>
                <div className="flex flex-wrap gap-2">
                  {domain.members.map((member, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs font-normal"
                    >
                      {member}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DomainsSection;

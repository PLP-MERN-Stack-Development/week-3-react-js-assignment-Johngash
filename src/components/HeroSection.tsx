import { Card, CardContent } from '@/components/Card';
import { Button } from '@/components/ui/button';
import { CheckSquare, Star, Zap, Shield } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-12" id="home">
      {/* Hero Banner */}
      <div className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            TaskHub Pro
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            The ultimate task management solution built with modern web technologies. 
            Organize, prioritize, and achieve your goals with style.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="gradient" 
            size="lg"
            onClick={() => scrollToSection('tasks')}
          >
            <CheckSquare className="h-5 w-5 mr-2" />
            Start Managing Tasks
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('api')}
          >
            Explore API Data
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card hover gradient className="text-center">
          <CardContent className="p-6">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Built with Vite and React for blazing fast performance and instant hot reloading.
            </p>
          </CardContent>
        </Card>

        <Card hover gradient className="text-center">
          <CardContent className="p-6">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Beautiful Design</h3>
            <p className="text-sm text-muted-foreground">
              Modern UI with Tailwind CSS, featuring gradients, animations, and responsive design.
            </p>
          </CardContent>
        </Card>

        <Card hover gradient className="text-center">
          <CardContent className="p-6">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Type Safe</h3>
            <p className="text-sm text-muted-foreground">
              Built with TypeScript for better developer experience and fewer runtime errors.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Technology Stack */}
      <Card className="bg-gradient-card shadow-elegant">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Built with Modern Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React', description: 'UI Library' },
              { name: 'TypeScript', description: 'Type Safety' },
              { name: 'Tailwind CSS', description: 'Styling' },
              { name: 'Vite', description: 'Build Tool' },
            ].map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="font-semibold text-primary">{tech.name}</div>
                <div className="text-sm text-muted-foreground">{tech.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroSection;
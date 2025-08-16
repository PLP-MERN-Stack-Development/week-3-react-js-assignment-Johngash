import { useTheme } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TaskManager from '@/components/TaskManager';
import ApiDataDisplay from '@/components/ApiDataDisplay';

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
          <HeroSection />
          <TaskManager />
          <ApiDataDisplay />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
import React from 'react';
import { Search, Menu, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {useClerk} from '@clerk/clerk-react';
export const Header: React.FC = () => {
  const { openSignIn } =useClerk();
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Film className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              CineMatch
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Movies</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">TV Shows</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Genres</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">My List</a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search movies..." 
                className="pl-10 w-64 bg-card border-primary/20 focus:border-primary"
              />
            </div>
             <Button 
              variant="cinema" 
              size="sm" 
              onClick={() => openSignIn({})}
            >
          Sign In
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
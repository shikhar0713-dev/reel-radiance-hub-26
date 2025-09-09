import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Plus, Info } from 'lucide-react';
import heroImage from '@/assets/hero-movie.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Featured Movie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-medium uppercase tracking-wider text-sm">Featured Movie</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Neo City
              <span className="block text-4xl md:text-6xl text-muted-foreground">2024</span>
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            In a dystopian future where technology controls humanity, one rebel discovers the truth 
            that could change everything. A thrilling sci-fi adventure that redefines reality.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="shadow-hero">
              <Play className="w-5 h-5" />
              Watch Now
            </Button>
            <Button variant="cinema" size="lg">
              <Plus className="w-5 h-5" />
              My List
            </Button>
            <Button variant="ghost" size="lg">
              <Info className="w-5 h-5" />
              More Info
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
            <span>2024</span>
            <span>•</span>
            <span>2h 15m</span>
            <span>•</span>
            <span className="text-primary">Sci-Fi, Action</span>
            <span>•</span>
            <span className="text-accent font-medium">9.1/10</span>
          </div>
        </div>
      </div>
    </section>
  );
};
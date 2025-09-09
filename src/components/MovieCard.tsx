import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Play } from 'lucide-react';

interface MovieCardProps {
  title: string;
  year: string;
  rating: number;
  genre: string;
  image: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ title, year, rating, genre, image }) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-primary/10 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105">
      <div className="aspect-[2/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Button variant="hero" size="sm" className="w-full">
              <Play className="w-4 h-4" />
              Watch Now
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg text-foreground line-clamp-1">{title}</h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{year}</span>
          <span className="text-primary font-medium">{genre}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-foreground font-medium">{rating}</span>
          <span className="text-muted-foreground">/10</span>
        </div>
      </div>
    </Card>
  );
};
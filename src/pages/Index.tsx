import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { MovieSection, recommendedMovies, trendingMovies } from '@/components/MovieSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div className="space-y-12 pb-16">
        <MovieSection title="Recommended for You" movies={recommendedMovies} />
        <MovieSection title="Trending Now" movies={trendingMovies} />
      </div>
    </div>
  );
};

export default Index;

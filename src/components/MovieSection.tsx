import React from 'react';
import { MovieCard } from './MovieCard';
import { ChevronRight } from 'lucide-react';
import movie1 from '@/assets/movie-1.jpg';
import movie2 from '@/assets/movie-2.jpg';
import movie3 from '@/assets/movie-3.jpg';

interface MovieSectionProps {
  title: string;
  movies: Array<{
    id: string;
    title: string;
    year: string;
    rating: number;
    genre: string;
    image: string;
  }>;
}

export const MovieSection: React.FC<MovieSectionProps> = ({ title, movies }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              genre={movie.genre}
              image={movie.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Sample data
export const recommendedMovies = [
  {
    id: '1',
    title: 'Eternal Love',
    year: '2024',
    rating: 8.7,
    genre: 'Romance',
    image: movie1,
  },
  {
    id: '2',
    title: 'Mountain Quest',
    year: '2023',
    rating: 9.2,
    genre: 'Adventure',
    image: movie2,
  },
  {
    id: '3',
    title: 'Dark Shadows',
    year: '2024',
    rating: 8.9,
    genre: 'Horror',
    image: movie3,
  },
  {
    id: '4',
    title: 'Eternal Love',
    year: '2024',
    rating: 8.7,
    genre: 'Romance',
    image: movie1,
  },
  {
    id: '5',
    title: 'Mountain Quest',
    year: '2023',
    rating: 9.2,
    genre: 'Adventure',
    image: movie2,
  },
  {
    id: '6',
    title: 'Dark Shadows',
    year: '2024',
    rating: 8.9,
    genre: 'Horror',
    image: movie3,
  },
];

export const trendingMovies = [
  {
    id: '7',
    title: 'Dark Shadows',
    year: '2024',
    rating: 8.9,
    genre: 'Horror',
    image: movie3,
  },
  {
    id: '8',
    title: 'Eternal Love',
    year: '2024',
    rating: 8.7,
    genre: 'Romance',
    image: movie1,
  },
  {
    id: '9',
    title: 'Mountain Quest',
    year: '2023',
    rating: 9.2,
    genre: 'Adventure',
    image: movie2,
  },
  {
    id: '10',
    title: 'Dark Shadows',
    year: '2024',
    rating: 8.9,
    genre: 'Horror',
    image: movie3,
  },
  {
    id: '11',
    title: 'Eternal Love',
    year: '2024',
    rating: 8.7,
    genre: 'Romance',
    image: movie1,
  },
  {
    id: '12',
    title: 'Mountain Quest',
    year: '2023',
    rating: 9.2,
    genre: 'Adventure',
    image: movie2,
  },
];
import React from "react";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/lib/types";

interface Props {
  filtered: Movie[];
}

export default function MovieGrid({ filtered }: Props) {
  return (
    <>
      <ul className="container grid gap-8 px-4 mx-auto xl:grid-cols-4 lg:grid-cols-3 lg:px-12 md:grid-cols-2">
        {filtered.map((movie : Movie) => (
          <MovieCard 
          key={movie.id} 
          id={movie.id} 
          title={movie.title} 
          adult={movie.adult}
          posterPath={movie.posterPath} 
          genres={movie.genres}
          ogLanguage={movie.ogLanguage}
          overview={movie.overview}
          popularity={movie.popularity}
          releaseDate={movie.releaseDate}
          voteAverage={movie.voteAverage}
          voteCount={movie.voteCount}
           />
        ))}
      </ul>
    </>
  );
}

import React from "react";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/lib/types";

interface Props {
  filtered: Movie[];
}

export default function MovieGrid({ filtered }: Props) {
  return (
    <>
      <ol>
        {filtered.map((movie : Movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} posterPath={movie.posterPath} />
        ))}
      </ol>
    </>
  );
}

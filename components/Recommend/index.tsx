import React from "react";
import { fetchRecommends, getTitleFromId } from "@/actions";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/lib/types";

interface Props {
  title: string;
}

export default async function Recommend({ title }: Props) {
  const data = await fetchRecommends(title);
  const recommends = data.recommends; // [{id: n, title: ""}, ...]

  return (
    <>
      <h2> Recommendations: </h2>
      <ol>
        {recommends.map((movie: Movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </ol>
    </>
  );
}

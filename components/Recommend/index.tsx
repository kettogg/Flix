import React from "react";
import { fetchRecommends, getTitleFromId } from "@/actions";
import MovieCard from "@/components/MovieCard";
import { getMoviesData } from "@/actions";
import { Movie } from "@/lib/types";

interface Props {
  title: string;
}

export default async function Recommend({ title }: Props) {
  const data = await fetchRecommends(title);
  const recommends = data.recommends; // [{id: n, title: ""}, ...]

  const recMoviesData = await getMoviesData(recommends, 0, recommends.length)

  return (
    <>
      <h2> Recommendations: </h2>
      <ol>
        {recMoviesData.map((recMovie: Movie) => (
          <MovieCard key={recMovie.id} id={recMovie.id} title={recMovie.title} posterPath={recMovie.posterPath} />
        ))}
      </ol>
    </>
  );
}

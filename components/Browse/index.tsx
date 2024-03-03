"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import MovieGrid from "@/components/MovieGrid";
import { Movie } from "@/lib/types";
import { getMoviesData } from "@/actions";

interface Props {
  count: number;
  movies: Movie[];
}

export default function Browse({ count, movies }: Props) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Movie[]>([])

  const searchFilter = (movies: Movie[]): Movie[] => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  // const filtered: Movie[] = searchFilter(movies); // Can be passed another component
  // We can use useEffect also
  // This way we are able to make a request and get extra data from TMDB Api as well, cool! 
  useEffect(()=>{
    const filtered: Movie[] = searchFilter(movies)
    if(filtered.length < 10) {
      getMoviesData(filtered, 0, filtered.length).then((res) => {
        setFiltered(res)
      })
    } else {
      // Because more the requests to Api more slower! :)
      getMoviesData(filtered, 0, 10).then((res) => {
        setFiltered(res)
      })
    }
  }, [query])

  const handleQueryChange = (el: any) => {
    setQuery(el.target.value.trim()); // Remove leading trailing spaces
  };

  return (
    <>
      <Input
        type="text"
        onChange={handleQueryChange}
        placeholder="Type your movie title here ..."
      />
      <MovieGrid filtered={filtered} />
    </>
  );
}

"use client";

import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import MovieGrid from "@/components/MovieGrid";
import { Movie } from "@/lib/types";

interface Props {
  count: number;
  movies: Movie[];
}

export default function Browse({ count, movies }: Props) {
  const [query, setQuery] = useState("");

  const searchFilter = (movies: Movie[]): Movie[] => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  };
  const filtered: Movie[] = searchFilter(movies); // Can be passed another component
  // console.log(filtered); // Works now with el: any, Also fuck typescript
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

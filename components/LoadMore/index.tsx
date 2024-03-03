"use client";

import { getMoviesData } from "@/actions";
import { Movie } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MovieGrid from "@/components/MovieGrid";

interface Props {
  movies: Movie[];
}

export default function LoadMore({ movies }: Props) {
  const { ref, inView } = useInView();
  const [moviesData, setMoviesData] = useState<Movie[]>([]);
  const [page, setPage] = useState(12);

  useEffect(() => {
    if (inView) {
      getMoviesData(movies, page, page + 12).then((res) => {
        setMoviesData([...moviesData, ...res]);
        setPage(page + 12);
      });
    }
  }, [inView]);

  return (
    <>
      <section>
        <MovieGrid filtered={moviesData} />
        <div ref={ref}>
          {/* When we reach this div scrolling down load more */}
        </div>
      </section>
    </>
  );
}

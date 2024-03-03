import React from "react";
import { fetchRecommends, getTitleFromId } from "@/actions";
import MovieGrid from "@/components/MovieGrid";
import { getMoviesData } from "@/actions";
import { Movie } from "@/lib/types";
import { siteConfig } from "@/config/site";
import { VideoIcon } from "@radix-ui/react-icons"

interface Props {
  title: string;
}

export default async function Recommend({ title }: Props) {
  const data = await fetchRecommends(title);
  const recommends = data.recommends; // [{id: n, title: ""}, ...]

  const recMoviesData = await getMoviesData(recommends, 0, recommends.length);

  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-center gap-3 px-6 sm:px-12">
        <h1 className="text-3xl leading-tight tracking-tighter sm:text-3xl mb-12"> Similar movies to watch </h1>
        <MovieGrid filtered={recMoviesData} />
      </div>
    </>
  );
}

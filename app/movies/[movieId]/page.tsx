import React from "react";
import { getTitleFromId, getTmdbData } from "@/actions";
import Recommend from "@/components/Recommend";
import { Movie } from "@/lib/types";
import { siteConfig } from "@/config/site";

interface Props {
  params: {
    movieId: string;
  };
}

export default async function MoviePage({ params }: Props) {
  const data = await getTitleFromId(+params.movieId); // + Convert movieId a string to number
  const title = data ?? `No movie found with ID: ${params.movieId}`;
  const movieData: Movie | -1 = await getTmdbData(title, +params.movieId);
  console.log(movieData);

  return (
    <>
      <div className="flex relative mx-auto opacity-80">
        <img
          className="w-full h-full"
          src={`${siteConfig.apiUrl.tmdbImage}${
            movieData !== -1
              ? movieData.backdropPath
              : "/doiUtOHzcxXFl0GVQ2n8Ay6Pirx.jpg"
          }`}
          alt={`${title} Backdrop Image`}
        />
        <div className="abosulte inset-0 flex flex-row">
          <div className="">
            Left
            <img
              className="w-md"
              src={`${siteConfig.apiUrl.tmdbImage}${
                movieData !== -1
                  ? movieData.posterPath
                  : "/doiUtOHzcxXFl0GVQ2n8Ay6Pirx.jpg"
              }`}
              alt=""
            />
          </div>
          <div className="">Right</div>
        </div>
      </div>
      <div>
        <Recommend title={title} />
      </div>
    </>
  );
}

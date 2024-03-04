import React from "react";
import { m } from "framer-motion";
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
  // console.log(movieData);

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute z-[-1] inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${siteConfig.apiUrl.tmdbImage}${
              movieData !== -1
                ? movieData.backdropPath
                : "/doiUtOHzcxXFl0GVQ2n8Ay6Pirx.jpg"
            })`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        <div className="flex justify-left items-center h-full mx-10">
          <div className="flex flex-col text-left">
            <h2 className="font-bold text-white text-5xl">
              {movieData !== -1 ? movieData.title : "Title"}
            </h2>
            <div className="mb-3">
              <ul className="inline-flex gap-2 pt-3 mb-0 text-sm text-white">
                {movieData !== -1
                  ? movieData.genres?.slice(0, 3).map((genre, index) => (
                      <li
                        key={index}
                        className="px-2 py-1 text-xs rounded-md border border-white"
                      >
                        {genre}
                      </li>
                    ))
                  : "Genres"}
              </ul>
            </div>
            <p className="text-white text-md max-w-sm lg:max-w-md">
              {movieData !== -1 ? movieData.overview : "Overview"}
            </p>
          </div>
        </div>
      </div>

      <section>
        <Recommend title={title} />
      </section>
    </>
  );
}

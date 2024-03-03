import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface Props {
  id: number;
  title: string;
  adult: boolean;
  genres: string[];
  ogLanguage: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
}

export default function MovieCard({
  id,
  title,
  posterPath,
  genres,
  overview,
}: Props) {
  return (
    <>
      <li className="flex w-full h-full max-w-sm mx-auto overflow-hidden transition duration-500 ease-in-out shadow-lg bg-zinc-950 rounded-md hover:-translate-y-2 hover:shadow-2xl relative text-white after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:via-zinc-900 after:to-transparent">
        <Link href={`/movies/${id}`}>
          <div className="relative z-10 px-6 pb-10 group">
            <header className="flex flex-col inner pb-6">
              <h2 className="text-2xl min-h-[4rem] font-bold text-white flex flex-col justify-center pt-40 pb-4">
                {title}
              </h2>

              <ul className="inline-flex gap-2 pt-3 mb-0 text-sm text-white">
                {genres?.slice(0, 3).map((genre) => (
                  <li
                    key={id + genre}
                    className="px-2 py-1 text-xs rounded-md border border-white"
                  >
                    {genre}
                  </li>
                ))}
              </ul>
            </header>
            {overview && (
              <p className="pt-2 pb-6 text-sm text-zinc-100">
                {overview.length > 260
                  ? overview.substring(0, 250) + "…"
                  : overview}
              </p>
            )}
          </div>
          <picture>
            <img
              src={`${siteConfig.apiUrl.tmdbImage}${posterPath}`}
              alt={`Poster for "${title}"`}
              className="absolute inset-0 w-full transform -translate-y-4"
            />
          </picture>
        </Link>
      </li>
    </>
  );
}

"use server";

import { siteConfig } from "@/config/site";
import { Movie } from "@/lib/types";

// Server side fetching of all the titles and count
export const fetchTitles = async () => {
  const res = await fetch(siteConfig.apiUrl.titles, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch API data");
  }
  const data = await res.json();
  return data;
};

export const fetchRecommends = async (title: string) => {
  const res = await fetch(
    `${siteConfig.apiUrl.recommendations}?title=${title}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch API data");
  }
  const data = await res.json();
  return data;
};

export const getTitleFromId = async (id: number) => {
  try {
    const data = await fetchTitles();
    const moviesList: Movie[] = data.list;
    const movie = moviesList.find((movie) => movie.id === id);
    return movie ? movie.title : undefined;
  } catch (err) {
    console.log("Failed to fetch the Title from ID");
  }
};

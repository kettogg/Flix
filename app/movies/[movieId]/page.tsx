import React from "react";
import { getTitleFromId } from "@/actions";
import Recommend from "@/components/Recommend";

interface Props {
  params: {
    movieId: string;
  };
}

export default async function MoviePage({ params }: Props) {
  const data = await getTitleFromId(+params.movieId); // + Convert movieId a string to number
  const title = data ?? `No movie found with ID: ${params.movieId}`;

  return (
    <>
      <div>
        <h1>
          Movie Details ID:{params.movieId} Title:{title}
        </h1>
        <Recommend title={title} />
      </div>
    </>
  );
}

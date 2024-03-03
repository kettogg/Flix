import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface Props {
  id: number;
  title: string;
  posterPath: string;
}

export default function MovieCard({ id, title, posterPath }: Props) {
  return (
    <>
      <li key={id}>
        <Link href={`/movies/${id}`}>
          ID:{id} Title:{title}
          <img src={`${siteConfig.apiUrl.tmdbImage}${posterPath}`} alt="" />
        </Link>
      </li>
    </>
  );
}

import React from "react";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
}

export default function MovieCard({ id, title }: Props) {
  return (
    <>
      <li key={id}>
        <Link href={`/movies/${id}`}>
          ID:{id} Title:{title}
        </Link>
      </li>
    </>
  );
}

import Image from "next/image";
import Browse from "@/components/Browse";
import { fetchTitles, getMoviesData } from "@/actions";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
  const data = await fetchTitles(); // From the python backend
  const countTitles = data.count;
  const arrTitles = data.list;

  return (
    <>
      <div className="mt-24 flex flex-col items-center justify-center gap-3 px-6 sm:px-12">
        <h1 className="font-extrabold leading-tight tracking-tighter text-3xl sm:text-4xl md:text-5xl">
          Welcome to your movie verse!
        </h1>
        <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
          Dive in to the world of cinema.
        </h2>
        <p className="text-md text-muted-foreground md:text-lg">
          Search over {countTitles} movie titles.
        </p>
        
        <Browse movies={arrTitles} count={countTitles} />

        <LoadMore movies={arrTitles}/> 
      </div>
    </>
  );
}

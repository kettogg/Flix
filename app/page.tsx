import Image from "next/image";
import Browse from "@/components/Browse";
import { fetchTitles, getMoviesData } from "@/actions";

export default async function Home() {
  const data = await fetchTitles(); // From the python backend
  const countTitles = data.count;
  const arrTitles = data.list;

  // getMoviesData will merge the title+id from Kaggle with other data from Tmdb Api
  // Finally made it to work T_T
  // Also 0, 10 are necessary as we have a limit of 50 req/s
  // const finalData = await getMoviesData(arrTitles, 0, 10);
  // console.log(finalData)

  return (
    <>
      <Browse movies={arrTitles} count={countTitles} />
    </>
  );
}

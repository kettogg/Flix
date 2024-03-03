import Image from "next/image";
import Browse from "@/components/Browse";
import { fetchTitles } from "@/actions";

export default async function Home() {
  const data = await fetchTitles();
  return (
    <>
      <Browse movies={data.list} count={data.count} />
    </>
  );
}

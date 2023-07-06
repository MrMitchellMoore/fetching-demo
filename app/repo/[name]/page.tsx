import { getRepo } from "@/functions/All_Apis";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const repo = await getRepo(params.name);

  return {
    title: repo.full_name,
  };
}

export default async function Page({ params }: { params: { name: string } }) {
  const repo = await getRepo(params.name);

  const BASE_URL = `http://localhost:3000/repo/`;

  return (
    <>
      <div className="flex flex-col mx-2 my-2 font-bold text-3xl justify-center items-center">
        <div className="flex gap-2">
          <button className="rounded-md px-2 bg-green-800 hover:bg-green-400">
            <Link href={BASE_URL + `next.js`}>NextJs</Link>
          </button>
          <button className="rounded-md px-2 bg-green-800 hover:bg-green-400">
            <Link href={BASE_URL + `turborepo`}>Turborepo</Link>
          </button>
          <button className="rounded-md px-2 bg-green-800 hover:bg-green-400">
            <Link href={BASE_URL + `commerce`}>Commerce</Link>
          </button>
        </div>

        <h1>Repo name: 🤷🏽‍♂️ maybe -&gt; {repo.full_name}</h1>
      </div>
    </>
  );
}

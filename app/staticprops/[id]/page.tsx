import { getCharacters } from "@/functions/All_Apis";
import { Characters } from "@/typings";
// import Image from "next/image";

export const dynamicParams = true;

export async function generateStaticParams() {
  const characters = await getCharacters();
  return characters.map((c) => ({
    id: c.id.toString(),
    //slug: c.name.replace(/\s+/g, "-").toLowerCase(),
  }));
}

async function getCharacter(id: number): Promise<Characters> {
  const character = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const results = await character.json();
  return results;
}

export default async function Staticpage({
  params,
}: {
  params: { id: number };
}) {
  const getPost = await getCharacter(params.id);
  console.log(getPost.name);

  return (
    <>
      <h1 className="font-bold text-3xl text-orange-500">
        The Character name is {params.id}
      </h1>
    </>
  );
}

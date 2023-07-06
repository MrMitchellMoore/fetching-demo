import type { Characters, Respository } from "@/typings";

// getStaticProps in Next13
export async function getCharacters(): Promise<Characters[]> {
  const character = await fetch(`${process.env.characterApi}/api/character`);
  const { results } = await character.json();
  return results;
}

// getServerProps in Next13
export async function getServerCharacters(): Promise<Characters[]> {
  const character = await fetch(`${process.env.characterApi}/api/character`, {
    cache: "no-store",
  });
  const { results } = await character.json();
  return results;
}

// Clientside Props
export async function fetcher(path: string): Promise<Characters[]> {
  const characters = await fetch(`${process.env.characterApi}/${path}`);
  const { results } = await characters.json();
  return results;
}

// vercel repo
export async function getRepo(name: string): Promise<Respository> {
  const res = await fetch(`${process.env.vercelRepo}/${name}`);
  return res.json();
}

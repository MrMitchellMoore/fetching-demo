import { getCharacters as getStaticCharacters } from "@/functions/All_Apis";
import Link from "next/link";
import { use } from "react";

export default function StaticPropsPage() {
  const allCharacters = use(getStaticCharacters());

  return (
    <section className="flex flex-col justify-center items-center">
      <p className="font-bold text-3xl">StaticPropsPage</p>
      {allCharacters?.map((c) => (
        <ul key={c.id}>
          <Link
            passHref
            href={`/staticprops/${c.name}`.replace(/\s+/g, "-").toLowerCase()}
          >
            <li>{c.name}</li>
          </Link>
        </ul>
      ))}
    </section>
  );
}

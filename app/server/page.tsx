import { getServerCharacters } from "@/functions/All_Apis";
import Link from "next/link";
import { use } from "react";

export default function ServerPage() {
  const characters = use(getServerCharacters());

  return (
    <section className="flex flex-col justify-center items-center">
      <p className="font-bold text-3xl">
        Server Fetching (getServerSideProps){" "}
      </p>
      {characters?.map((c) => (
        <ul key={c.id}>
          <Link
            passHref
            href={`/server/${c.name}`.replace(/\s+/g, "-").toLowerCase()}
          >
            <li>{c.name}</li>
          </Link>
        </ul>
      ))}
    </section>
  );
}
